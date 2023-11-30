import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.scss']
})
export class MisTurnosComponent{
  user: any;
  admins: any[] = [];
  pacientes: any[] = [];
  especialistas: any[] = [];
  rutaActual:any;
  foto: string = '';

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
          this.foto = u.foto;
        }
      });

      let admin;
      let paciente;
      let especialista;

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

      //////////////////VER SI ES PACIENTE O ESPECIALISTA
      this.especialistas.forEach(e => {
          if(e.email === this.auth.get_user()?.email)
          {
            especialista = e;
          }
      });

      this.pacientes.forEach(p =>{
        if(p.email === this.auth.get_user()?.email)
        {
          paciente = p;
          //document.write(JSON.stringify(paciente));
        }
      });

      this.user = paciente != null ? paciente : especialista != null ? especialista : null;
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
}
