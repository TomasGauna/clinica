import { Component, Input } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';
import * as pdfMake from 'pdfmake/build/pdfMake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-historial-clinico',
  templateUrl: './historial-clinico.component.html',
  styleUrls: ['./historial-clinico.component.scss']
})
export class HistorialClinicoComponent {
  @Input() paciente: any;
  especialistas: any[] = [];
  turnos: any[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit()
  {
    FirestoreService.traerFs('turnos', this.firestore).subscribe((data)=>{
      this.turnos = data;
      FirestoreService.traerFs('usuarios', this.firestore).subscribe((data)=>{
        this.especialistas = [];
        data.forEach((u)=>{
          if(u.perfil === 'especialista')
          {
            this.turnos.forEach((turno)=>{
              if(turno.paciente.dni === this.paciente.dni && turno.especialista.dni === u.dni)
              {
                if(!this.especialistas.includes(u))
                {
                  this.especialistas.push(u);
                }
              }
            });
          }
        });
      });
    });
  }

  armarPdf(especialista: any)
  {
    let array: any = [];

    this.turnos.forEach((turno)=>{
      if(turno.paciente.dni === this.paciente.dni && turno.especialista.dni === especialista.dni)
      {
        array.push(turno);
      }
    });

    this.descargarPDFTurnosPorDia(array, especialista);
  }

  descargarPDFTurnosPorDia(data: any, especialista: any) //`Atenciones de ${this.paciente.nombre} ${this.paciente.apellido} con el Dr. ${especialista.apellido}`
  {
    const logoPath = 'assets/medico.png';

    // Cargar la imagen y convertirla a base64
    fetch(logoPath)
      .then(response => response.blob())
      .then(blob => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const logoBase64 = reader.result as string;
  
          const docDefinition: any = {
            content: [
              { image: logoBase64, width: 150, height: 150, alignment: 'center' },
              { text: `Atenciones de ${this.paciente.nombre} ${this.paciente.apellido} con el Dr. ${especialista.apellido}`, alignment: 'center' },
              { text: `Fecha de Emisión: ${new Date().toLocaleDateString()}`, style: 'fecha', alignment: 'center' },
            ],
            styles: {
              titulo: {
                fontSize: 30,
                bold: true,
                margin: [0, 10, 0, 10],
              },
              fecha: {
                fontSize: 12,
                italic: true,
                cursive: true,
                margin: [0, 0, 0, 10],
              },
            },
          };

          const turnoContent = data.map((turno: any) => {
            const historialClinicoFecha = this.getHistorialClinicoFecha(turno.fecha, this.paciente.historial_clinico);
            return {
              text: `Fecha: ${turno.fecha}, Historial Clínico: ${this.formatHistorialClinico(historialClinicoFecha)}`,
              style: 'normal',
            };
          });
  
          // Agregar el contenido formateado al documento PDF
          docDefinition.content = docDefinition.content.concat(turnoContent);
  

          pdfMake.createPdf(docDefinition).download(`atenciones_${this.paciente.apellido}_${especialista.apellido}`);
        };
  
        reader.readAsDataURL(blob);
      });
  }

  getHistorialClinicoFecha(turnoFecha: string, historialClinico: any[]): any[] 
  {
    return historialClinico.filter(entry => entry.fecha === turnoFecha);
  }

  formatHistorialClinico(historialClinico: any[]): string 
  {
    const formattedData = historialClinico.map(entry => `Altura: ${entry.altura}, Peso: ${entry.peso}, Presión: ${entry.presion}, Temperatura: ${entry.temperatura}`).join(', ');
    return formattedData;
  }

  obtenerColumnas(array: any): string[] {
    let devuelve: string[] = [];
    
    if (array.length !== 0) {
      Object.keys(array[0]).forEach((element: any) => {
        if (element === 'altura' || element === 'presion' || element === 'peso' || element === 'temperatura' || element === 'fecha') {
          devuelve.push(element);
        }
      });
    }

    return devuelve;
  }
}
