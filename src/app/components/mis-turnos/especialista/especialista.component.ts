import { Component, Input } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-especialista',
  templateUrl: './especialista.component.html',
  styleUrls: ['./especialista.component.scss']
})
export class EspecialistaComponent 
{
  @Input() especialista:any;
  turnos: any[] = [];

  busqueda: string = '';
  comentario: string = '';
  turno: any;
  modal: boolean = false;
  fechaActual: Date = new Date();
  botones = true;
  resenia = false;
  cancelar = false;
  rechazar = false;
  finalizar = false;

  constructor(private firestore: Firestore, private toast: ToastrService)
  {
    FirestoreService.traerFs('turnos', this.firestore, 'fecha').subscribe((data)=>{
      this.turnos = [];
      data.forEach(t => {
        if(t.especialista.dni === this.especialista.dni)
        {
          this.turnos.push(t);
        }
      });//////////////PODRIA HACERLO CON UN INPUT Y MANDARLE LA COLECCION QUE NECESITO
    });
  }

  ngOnInit()
  {}

  obtenerColumnas(array: any): string[] 
  {
    let devuelve: string[] = [];
    if (array.length !== 0) 
    {
      Object.keys(array[0]).forEach((element:any) => {
        if(element == 'especialista')
        {
          devuelve.push('especialidad');
        }
        else
        {
          if(element != 'resenia' && element != 'comentario')
          {
            devuelve.push(element);
          }
        }
      });
    }
    return devuelve;
  }

  mostrarAcciones(turno:any)
  {
    this.modal = true;
    this.turno = turno;
  }
  
  closeModal() 
  {
    this.modal = false;
    this.resenia = false;
    this.turno = false;
    this.botones = true;
    this.rechazar = false;
    this.finalizar = false;
    this.cancelar = false;
  }


  construirFecha(fechaStr: string): Date 
  {
    const partesFecha = fechaStr.split('/');
    const dia = +partesFecha[0];
    const mes = +partesFecha[1] - 1;
    const anio = +partesFecha[2];

    return new Date(anio, mes, dia);
  }

  filtrarTurnos(): any[] {
    const letraBuscada = this.busqueda.toLowerCase().trim();

    if (letraBuscada === '') {
      return this.turnos;
    }

    return this.turnos.filter(obj =>
      obj['paciente'].apellido?.toString().toLowerCase().includes(letraBuscada) ||
      obj['especialista'].especialidad?.toString().toLowerCase().includes(letraBuscada)
    );
  }

  evaluar(turno:any, accion:string) : boolean
  {
    let retorno = false;

    switch(accion)
    {
      case 'can-rec':
        if(this.fechaActual < this.construirFecha(turno.fecha) && turno.estado !== 'aceptado' && turno.estado !== 'realizado' && turno.estado !== 'rechazado' && turno.estado !== 'cancelado' && turno.estado !== 'finalizado')
        {
          retorno = true;
        }
      break;

      case 'aceptar':
        if(turno.estado === 'pendiente')
        {
          retorno = true;
        }
      break;

      case 'finalizar':
        if(turno.estado === 'aceptado')
        {
          retorno = true;
        }
      break;

      case 'resenia':
        if(turno.resenia != '')
        {
          retorno = true;
        }
      break;
    }
    
    return retorno;
  }
  
  cancelarTurno()
  {
    this.botones = false;
    this.cancelar = true;
  }

  verResenia()
  {
    this.botones = false;
    this.resenia = true;
  }

  rechazarTurno()
  {
    this.botones = false;
    this.rechazar = true;
  }

  aceptarTurno(turno: any)
  {
    turno.estado = 'aceptado';
    FirestoreService.actualizarFs('turnos', turno, this.firestore).then(()=>{
      this.toast.info("Turno aceptado...");
      this.closeModal();
    });
  }

  finalizarTurno()
  {
    this.botones = false;
    this.finalizar = true;
  }


  actualizar(turno:any, estado: string)
  {
    if(this.comentario != '')
    {
      turno.estado = estado;
      turno.resenia = this.comentario;
      FirestoreService.actualizarFs('turnos', turno, this.firestore).then(()=>{
        this.toast.info("Turno" + estado + "...");
        this.closeModal();
      });
    }
    else
    {
      this.toast.error("Debe completar el campo...");
    }
  }
}
