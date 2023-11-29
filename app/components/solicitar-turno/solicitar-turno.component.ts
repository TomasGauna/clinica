import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-solicitar-turno',
  templateUrl: './solicitar-turno.component.html',
  styleUrls: ['./solicitar-turno.component.scss']
})
export class SolicitarTurnoComponent {
  user: any;
  admins: any[] = [];
  pacientes: any[] = [];
  especialistas: any[] = [];
  turnos: any[] = [];
  rutaActual: any;
  usuario: any;
  especialistaElegido: any;
  especialidadElegida: string = '';
  diaElegido: string = '';
  horaElegida: string = '';
  pacienteElegido: any;

  constructor(private auth: AuthService,private toast: ToastrService, private firestore: Firestore, private router: Router)
  {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = event.url;
      }
    });
  }

  ngOnInit()
  {
    FirestoreService.traerFs(('usuarios'), this.firestore).subscribe((data)=>{
      data.forEach((u)=>{
        if(u.perfil === 'administrador')
        {
          this.admins.push(u);
        }
        else
        {
          if(u.perfil === 'especialista')
          {
            this.especialistas.push(u);
          }
          else
          {
            this.pacientes.push(u);
          }
        }

        if(u.email === this.auth.get_user()?.email)
        {
          this.usuario = u;
        }
      });

      let admin;

      this.admins.forEach((a)=>{
        if(this.auth.get_user()?.email === a.email)
        {
          admin = a;
        }
      })

      if(this.auth.get_user()?.emailVerified || admin)
      {
        this.user = this.auth.get_user();
      }
      else
      {
        this.user = null;
      }
    });
  }

  cerrarSesion()
  {
    this.toast.info('Cerrando sesion', "Espera...");
    this.auth.logout()?.then(()=>{
      setTimeout(() => {
        this.toast.success('Cerraste sesion', "Todo normal");
        this.router.navigateByUrl('home');
        this.user = null;
      }, 2000);
    });
  }

  estaEnArrayEmail(array:any[], obj: any): boolean
  {
    let ret = false;

    if(obj)
    {
      array.forEach((a:any) => {
        if(a.email === obj.email)
        {
          ret = true;
        }
      });
    }

    return ret;
  }


  guardarTurno()
  {
    const paciente = this.usuario.perfil === 'administrador' ? this.pacienteElegido : this.usuario;
    const title = this.usuario.perfil === 'administrador' ? `¿Confirma la reserva del turno de ${paciente.apellido}?` : `${paciente.nombre}, ¿confirma la reserva de su turno?`;
    const obj = {comentario: '', resenia: '', especialista: this.especialistaElegido, especialidad: this.especialidadElegida, estado: 'pendiente', fecha: this.diaElegido, hora: this.horaElegida, paciente: paciente}
    
    const swalWithBootstrapButtons = Swal.mixin(
    {
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons
    .fire({
      title: title,
      text: `Dia ${this.diaElegido} a las ${this.horaElegida}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, ¡confirmo!",
      cancelButtonText: "No, ¡cancelar!",
      reverseButtons: true
    })
    .then((result) => 
    {
      if (result.isConfirmed) 
      {
        FirestoreService.guardarFs('turnos', obj, this.firestore)
        .then(()=>{
          swalWithBootstrapButtons
          .fire({
            title: "¡Confirmado!",
            text: "Su turno se ha guardado correctamente.",
            icon: "success"
          });

          this.horaElegida = '';
          this.especialidadElegida = '';
          this.especialistaElegido = null;
          this.pacienteElegido = null;
          this.diaElegido = '';
        })
        .catch(()=>{
          swalWithBootstrapButtons.fire({
            title: "Error en la base de datos...",
            text: "",
            icon: "error"
          });
        });
      } 
      else
      {
        if (result.dismiss === Swal.DismissReason.cancel) 
        {
          swalWithBootstrapButtons.fire({
            title: "Cancelado...",
            text: "",
            icon: "error"
          });
        }
      }
    });
  }


  recibirEspecialista($event:any)
  {
    this.especialistaElegido = $event;
  }

  recibirEspecialidad($event:any)
  {
    this.especialidadElegida = $event;
  }

  recibirDia($event:any)
  {
    this.diaElegido = $event;
  } 

  recibirHora($event:any)
  {
    this.horaElegida = $event;
  } 

  recibirPaciente($event:any)
  {
    this.pacienteElegido = $event;
  }
}
