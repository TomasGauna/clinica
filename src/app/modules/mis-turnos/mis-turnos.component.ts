import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-mis-turnos',
  templateUrl: './mis-turnos.component.html',
  styleUrls: ['./mis-turnos.component.scss']
})
export class MisTurnosComponent 
{
  user: any;
  admins: any[] = [];
  pacientes: any[] = [];
  especialistas: any[] = [];

  constructor(private auth: AuthService,private toast: ToastrService, private firestore: Firestore, private router: Router)
  {}

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
        }
      });

      this.user = paciente != null ? paciente : especialista != null ? especialista : null;
    });
  }

  irHacia(path: string)
  {
    let ret = false;

    if(path === 'usuarios')
    {
      ret = this.estaEnArrayEmail(this.admins, this.user);
    }
    else
    {
      if(path === 'mis-turnos')
      {
        ret = this.estaEnArrayEmail(this.especialistas, this.user) || this.estaEnArrayEmail(this.pacientes, this.user);;
      }
    }

    if(!ret)
    {
      this.toast.error("Acceso denegado");
    }
    else
    {
      this.router.navigate(['/'+path]);
    }
  }

  cerrarSesion()
  {
    this.toast.info('Cerrando sesion', "Espera...");
    this.auth.logout()?.then(()=>{
      setTimeout(() => {
        this.toast.success('Cerraste sesion', "Todo normal");
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
