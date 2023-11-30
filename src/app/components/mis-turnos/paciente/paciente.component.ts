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
        if(element != 'paciente' && element != 'resenia' && element != 'comentario')
        {
          devuelve.push(element);
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
  
    const resultadosFiltrados = [];
  
    const buscarEnHistorial = (historial: any[]): boolean => {
      for (const registro of historial) 
      {
        for (const key in registro) 
        {
          if (registro[key]?.toString().toLowerCase().includes(letraBuscada)) 
          {
            return true;
          }
        }
      }
      return false;
    };

    for (const turno of this.turnos) {
      const especialidad = turno['especialidad'];
      const paciente = turno['paciente'];
      const comentario = turno['comentario'];
      const especialista = turno['especialista'];
      const estado = turno['estado'];
      const fecha = turno['fecha'];
      const hora = turno['hora'];
      const id = turno['id'];
      const resenia = turno['resenia'];
  
      if (
        (especialidad && especialidad.toString().toLowerCase().includes(letraBuscada)) ||
        (paciente &&
          (paciente.apellido?.toString().toLowerCase().includes(letraBuscada) ||
            comentario?.toString().toLowerCase().includes(letraBuscada) ||
            especialista.apellido?.toString().toLowerCase().includes(letraBuscada) ||
            estado?.toString().toLowerCase().includes(letraBuscada) ||
            fecha?.toString().toLowerCase().includes(letraBuscada) ||
            hora?.toString().toLowerCase().includes(letraBuscada) ||
            id?.toString().toLowerCase().includes(letraBuscada) ||
            resenia?.toString().toLowerCase().includes(letraBuscada) ||
            buscarEnHistorial(paciente.historial_clinico))
        )
      ) {
        resultadosFiltrados.push(turno);
      }
    }
    return resultadosFiltrados;
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
    const partesFecha = fechaStr.split('-');
    const dia = +partesFecha[0];
    const mes = +partesFecha[1] - 1;
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

