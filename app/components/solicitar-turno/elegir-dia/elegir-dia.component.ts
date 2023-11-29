import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-elegir-dia',
  templateUrl: './elegir-dia.component.html',
  styleUrls: ['./elegir-dia.component.scss']
})
export class ElegirDiaComponent {
  @Input() especialista: any;
  @Input() especialidad: string = '';
  @Output() diaElegido = new EventEmitter<string>();

  filtrarDiasPorEspecialidad(): any
  {
    let horarios:any;

    this.especialista.atencion?.forEach((a:any) => {
      if(a.especialidad === this.especialidad)
      {
        horarios = a;
      }
    });

    const diasProximos = [];
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  
    const fechaActual = new Date();
  
    for (let i = 0; i < 15; i++) 
    {
      const fecha = new Date();
      fecha.setDate(fechaActual.getDate() + i);
  
      const diaSemana = diasSemana[fecha.getDay()];
      
      if (horarios.dias.includes(diaSemana) && fecha != fechaActual) 
      {
        const dia = ('0' + (fecha.getDate() + 1)).slice(-2);
        const mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
        const año = fecha.getFullYear();
        diasProximos.push(`${dia}-${mes}-${año}`);
      }
    }
  
    return diasProximos;
  }

  enviarDia(dia: string)
  {
    this.diaElegido.emit(dia);
  }
}
