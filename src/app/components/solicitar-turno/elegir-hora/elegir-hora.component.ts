import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-elegir-hora',
  templateUrl: './elegir-hora.component.html',
  styleUrls: ['./elegir-hora.component.scss']
})
export class ElegirHoraComponent {
  @Input() especialista: any;
  @Input() especialidad: string = '';
  @Input() dia: string = '';
  @Output() horaElegida = new EventEmitter<string>();
   
  turnos: any[]= [];

  constructor(private firestore: Firestore){}

  ngOnInit()
  {
    FirestoreService.traerFs('turnos', this.firestore).subscribe((data)=>{
      this.turnos = data;
    });
  }

  filtrarHorariosPorDia(): string[]
  {
    const minutosInicio = 8 * 60;
    const minutosFin = 20 * 60;
    const duracionTotal = minutosFin - minutosInicio;
    const horariosTurnos: string[] = [];
  
    let horarios:any;

    this.especialista.atencion.forEach((a:any) => {
      if(a.especialidad === this.especialidad)
      {
        horarios = a;
      }
    });

    const turnosDisponibles = Math.floor(duracionTotal / horarios.duracion);

    for (let i = 0; i < turnosDisponibles; i++) 
    {
      const minutosDesdeInicio = i * horarios.duracion;
      const horas = Math.floor((minutosInicio + minutosDesdeInicio) / 60) % 12 || 12;
      const minutos = (minutosInicio + minutosDesdeInicio) % 60;
      const periodo = minutosInicio + minutosDesdeInicio < 720 ? 'am' : 'pm';
      const horario = `${horas}:${minutos < 10 ? '0' : ''}${minutos}${periodo}`;
      
      let disponible = true;
      this.turnos.forEach((t) => {
        if(t.fecha === this.dia && t.hora === horario)
        {
          disponible = false;
          console.log(`Fecha y horario no disponible: ${t.fecha} - ${t.hora}`);
        }
      });

      if(disponible)
      {
        horariosTurnos.push(horario);
      }
    }
  
    return horariosTurnos;
  }

  enviarHora(hora: string)
  {
    this.horaElegida.emit(hora);
  }
}
