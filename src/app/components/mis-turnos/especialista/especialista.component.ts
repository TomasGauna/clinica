import { Component, Input } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

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
      });
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
        if(element != 'resenia' && element != 'comentario' && element != 'especialista')
        {
          devuelve.push(element);
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
    const partesFecha = fechaStr.split('-');
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
  
    const resultadosFiltrados: any[] = [];
  
    this.turnos.forEach( (turno)=> 
    {
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
    });
    return resultadosFiltrados;
  }

  evaluar(turno:any, accion:string) : boolean
  {
    let retorno = false;

    switch(accion)
    {
      case 'cancelar':
        if(this.fechaActual < this.construirFecha(turno.fecha) && turno.estado === 'aceptado')
        {
          retorno = true;
        }
      break;

      case 'rechazar':
        if(this.fechaActual < this.construirFecha(turno.fecha) && turno.estado === 'pendiente')
        {
          retorno = true;
        }
      break;

      case 'aceptar':
        if(this.fechaActual < this.construirFecha(turno.fecha) && turno.estado === 'pendiente')
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

  rechazarTurno(turno: any)
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
      
      if(estado === 'rechazado')
      {
        turno.fecha = '-';
        turno.hora = '-';
      }
      
      FirestoreService.actualizarFs('turnos', turno, this.firestore).then(()=>{
        this.toast.info("Turno " + estado + "...");
        this.closeModal();
      });
    }
    else
    {
      this.toast.error("Debe completar el campo...");
    }
  }

  finalizarYActualizar(turno: any)
  {
    if(this.comentario == '')
    {
      Swal.fire("Atencion..", "Debe completar el campo de diagnostico", 'warning')
    }
    else
    {
      Swal.fire({
        title: 'Completa el formulario',
        html:
          '<div style="width:100%; display:flex; flex-direction: column;">' +
            '<div class="swal2-input-container" style="display:flex; align-items: center; width:100%;">' +
              '<input id="swal-altura" class="swal2-input" placeholder="*Altura (cm)" required>'+
              '<input id="swal-peso" class="swal2-input" placeholder="*Peso (kg)" required>' +
            '</div>' +
            '<div class="swal2-input-container" style="display:flex; align-items: center; width:100%;">' +
              '<input id="swal-temperatura" class="swal2-input" placeholder="*Temperatura" required>' +
              '<input id="swal-presion" class="swal2-input" placeholder="*Presión(xx-xx)" required>' +
            '</div>' +
            '<div class="swal2-input-container" style="display:flex; align-items: center; width:100%;">' +
            '  <input id="swal-dato1" class="swal2-input" placeholder="*Dato 1">:' +
            '  <input id="swal-valor-dato1" class="swal2-input" placeholder="Valor Dato 1">' +
            '</div>' +
            '<div class="swal2-input-container" style="display:flex; align-items: center; width:100%;">' +
            '  <input id="swal-dato2" class="swal2-input" placeholder="Dato 2">:' +
            '  <input id="swal-valor-dato2" class="swal2-input" placeholder="Valor Dato 2">' +
            '</div>'+
            '<div class="swal2-input-container" style="display:flex; align-items: center; width:100%;">' +
            '  <input id="swal-dato3" class="swal2-input" placeholder="Dato 3">:' +
            '  <input id="swal-valor-dato3" class="swal2-input" placeholder="Valor Dato 3">' +
            '</div>'+
          '</div>',
        focusConfirm: false,
        preConfirm: () => {
          const altura = (<HTMLInputElement>Swal.getPopup()?.querySelector('#swal-altura')).value;
          const peso = (<HTMLInputElement>Swal.getPopup()?.querySelector('#swal-peso')).value;
          const temperatura = (<HTMLInputElement>Swal.getPopup()?.querySelector('#swal-temperatura')).value;
          const presion = (<HTMLInputElement>Swal.getPopup()?.querySelector('#swal-presion')).value;
          const dato1 = (<HTMLInputElement>Swal.getPopup()?.querySelector('#swal-dato1')).value;
          const valorDato1 = (<HTMLInputElement>Swal.getPopup()?.querySelector('#swal-valor-dato1')).value;
          const opcional1 = (<HTMLInputElement>Swal.getPopup()?.querySelector('#swal-dato2')).value;
          const valorOpcional1 = (<HTMLInputElement>Swal.getPopup()?.querySelector('#swal-valor-dato2')).value;
          const opcional2 = (<HTMLInputElement>Swal.getPopup()?.querySelector('#swal-dato3')).value;
          const valorOpcional2 = (<HTMLInputElement>Swal.getPopup()?.querySelector('#swal-valor-dato3')).value;
      
          if (!altura || isNaN(parseInt(altura))) 
          {
            Swal.showValidationMessage('La altura debe ser numerica');
            return false;
          }
          else
          {
            if (!peso || isNaN(parseInt(peso)))
            {
              Swal.showValidationMessage('El peso debe ser numerico');
              return false;
            }
            else
            {
              if (!temperatura || isNaN(parseInt(temperatura)))
              {
                Swal.showValidationMessage('La temperatura debe ser numerica');
                return false;
              }
              else
              {
                if (!presion)
                {
                  Swal.showValidationMessage('La presion es obligatoria');
                  return false;
                }
                else
                {
                  if(presion.split("-").length === 2)
                  {
                    if(isNaN(parseInt(presion.split("-")[0])) || isNaN(parseInt(presion.split("-")[1])))
                    {
                      Swal.showValidationMessage('La presion debe tener dos partes numericas, separadas por "-"');
                      return false;
                    }
                    else
                    {
                      if(!dato1 || !valorDato1)
                      {
                        Swal.showValidationMessage('El dato 1 y el valor 1 son obligatorios');
                        return false;
                      }
                    }
                  }
                  else
                  {
                    Swal.showValidationMessage('La presion es obligatoria');
                    return false;
                  }
                }
              }
            }
          }
      
          return {
            altura,
            peso,
            temperatura,
            presion,
            dato1,
            valorDato1,
            opcional1,
            valorOpcional1,
            opcional2,
            valorOpcional2,
          };
        },
        width: 'auto',
      })
      .then((result) => 
      {
        if (result.value) 
        {
          const fecha = turno.fecha;
          const paciente = turno.paciente;
          const altura = result.value.altura;
          const peso = result.value.peso;
          const temperatura = result.value.temperatura;
          const presion = result.value.presion;
          const dato1 = result.value.dato1;
          const valorDato1 = result.value.valorDato1;
          const opcional1 = result.value.opcional1;
          const valorOpcional1 = result.value.valorOpcional1;
          const opcional2 = result.value.opcional2;
          const valorOpcional2 = result.value.valorOpcional2;
          const jsonResult: any = {
            altura,
            peso,
            temperatura,
            presion,
            fecha,
          };

          jsonResult[dato1] = valorDato1;
          
          if (opcional1) {
            jsonResult[opcional1] = valorOpcional1;
          }
          
          if (opcional2) {
            jsonResult[opcional2] = valorOpcional2;
          }

          jsonResult.fecha = 
          console.log(paciente);
          paciente.historial_clinico.push(jsonResult);
          turno.estado = 'finalizado';
          turno.resenia = this.comentario;
          turno.paciente = paciente;
          FirestoreService.actualizarFs('usuarios', paciente, this.firestore)
          .then(()=>{
            FirestoreService.actualizarFs('turnos', turno, this.firestore).then(()=>{
              Swal.fire("Turno finalizado...", "", 'success');
              this.closeModal();
            });
          })
          .catch(()=>{
            Swal.fire("Hubo un error...", "", 'error');
          });
        }
      });
    }
  }
}
