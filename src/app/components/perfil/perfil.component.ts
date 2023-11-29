import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent 
{
  user: any;
  admins: any[] = [];
  pacientes: any[] = [];
  especialistas: any[] = [];
  rutaActual: any;
  usuario: any;
  dias: string[] = [
    'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'
  ];
  diasElegidos: string[] = [];
  diasInput: string = '';
  duracion: string = '';
  especialidadMostrar: string = '';
  
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
/*           if(u.perfil === 'especialista')
          {

          } */
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
      console.log(this.user);
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

  elegirEspecialidad(especialidad: string)
  {
    this.especialidadMostrar = especialidad;
    this.usuario.atencion.forEach((a:any) => {
      if(a.especialidad === especialidad)
      {
        this.duracion = `${a.duracion}`;
        a.dias.forEach((dia:string) => {
          this.diasElegidos.push(dia);
        });
        this.diasInput = a.dias.join(' '); 
      }
    });
  }

  elegirDia(dia: string) 
  {
    let index = this.diasElegidos.indexOf(dia);

    if (index !== -1) 
    {
      this.diasElegidos.splice(index, 1);
    } 
    else 
    {
      this.diasElegidos.push(dia);
    }
    console.log(this.diasElegidos);
    this.diasInput = this.diasElegidos.join(' ');
  }

  guardarCambios()
  {
    const duracion = parseInt(this.duracion);
    
    if(duracion && this.diasElegidos.length > 0)
    {
      this.usuario.atencion.forEach((a:any) => {
        if(a.especialidad === this.especialidadMostrar)
        {
          a.duracion = duracion;
          a.dias = this.diasElegidos;
        }
      });
      FirestoreService.actualizarFs('usuarios', this.usuario, this.firestore).then(()=>{
        Swal.fire(
          'Perfecto',
          'Cambios guardados correctamente',
          'success'
        );
      })
      .catch((err)=>{
        Swal.fire(
          err.code,
          '',
          'error'
        );
      });
    }
    else
    {
      Swal.fire(
        'Corrobore los datos',
        '',
        'error'
      );
    }
  }

  compararArrays(array1: any[], array2: any[]): boolean {
    if (array1.length !== array2.length) {
      return false;
    }
  
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  
    return true;
  }

  datosIguales(): boolean
  {
    return parseInt(this.duracion) === this.usuario.duracion && this.compararArrays(this.diasElegidos, this.usuario.dias);
  }
}
