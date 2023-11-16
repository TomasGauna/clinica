import { Component, Input } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent 
{
  @Input() paciente: any;
  turnos: any[] = [];

  busqueda: string = '';
  comentario: string = '';
  turno: any;
  modal: boolean = false;
  fechaActual: Date = new Date();
  botones = true;
  resenia = false;
  reseniaTxt = false;
  calificar = false;

  constructor(private firestore: Firestore, private toast: ToastrService)
  {
    FirestoreService.traerFs('turnos', this.firestore, 'fecha').subscribe((data)=>{
      this.turnos = [];
      data.forEach(t => {
        if(t.paciente.dni === this.paciente.dni)
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
          devuelve.push('especialista');
          devuelve.push('especialidad');
        }
        else
        {
          if(element != 'paciente' && element != 'resenia' && element != 'comentario')
          {
            devuelve.push(element);
          }
        }
      });
    }
    
    return devuelve;
  }

  filtrarTurnos(): any[] {
    const letraBuscada = this.busqueda.toLowerCase().trim();

    if (letraBuscada === '') {
      return this.turnos;
    }

    return this.turnos.filter(obj =>
      obj['especialista'].apellido?.toString().toLowerCase().includes(letraBuscada) ||
      obj['especialista'].especialidad?.toString().toLowerCase().includes(letraBuscada)
    );
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
    this.reseniaTxt = false;
    this.comentario = '';
  }

  construirFecha(fechaStr: string): Date 
  {
    const partesFecha = fechaStr.split('/');
    const dia = +partesFecha[0];
    const mes = +partesFecha[1] - 1; // Restamos 1 porque los meses en JavaScript son de 0 a 11
    const anio = +partesFecha[2];

    return new Date(anio, mes, dia);
  }

  evaluar(turno:any, accion:string) : boolean
  {
    let retorno = false;

    switch(accion)
    {
      case 'cancelar':
        if(this.fechaActual < this.construirFecha(turno.fecha) && turno.estado != 'realizado' && turno.estado != 'cancelado')
        {
          retorno = true;
        }
      break;

      case 'encuesta':
        if(turno.estado == 'realizado' && turno.resenia != '')
        {
          retorno = true;
        }
      break;

      case 'calificar':
        if(turno.estado == 'realizado' && turno.comentario == '')
        {
          retorno = true;
        }
      break;

      case 'resenia':
        if(turno.resenia != '' || turno.comentario != '')
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
    this.reseniaTxt = true;
  }

  verResenia()
  {
    this.botones = false
    this.resenia = true;
  }

  completarEncuesta()
  {
    //MOSTRAR ENCUESTA || COMO ES LA ENCUESTA\\
  }

  calificarAtencion()
  {
    this.botones = false
    this.calificar = true;
  }

  calificarA(turno: any)
  {
    if(this.comentario != '')
    {
      turno.comentario = this.comentario;
      FirestoreService.actualizarFs('turnos', turno, this.firestore).then(()=>{
        this.toast.info("Turno calificado...");
        this.closeModal();
      });
    }
    else
    {
      this.toast.error("Debe completar el campo...");
    }
  }

  cancelar(turno:any)
  {
    if(this.comentario != '')
    {
      turno.estado = 'cancelado';
      turno.comentario = this.comentario;
      FirestoreService.actualizarFs('turnos', turno, this.firestore).then(()=>{
        this.toast.info("Turno cancelado...");
        this.closeModal();
      });
    }
    else
    {
      this.toast.error("Debe completar el campo...");
    }
  }
}

