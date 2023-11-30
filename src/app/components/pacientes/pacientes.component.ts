import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {
  user: any;
  admins: any[] = [];
  pacientes: any[] = [];
  especialistas: any[] = [];
  turnos: any[] = [];
  rutaActual: any;
  usuario: any;
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
    FirestoreService.traerFs('turnos', this.firestore).subscribe((data)=>{
      this.turnos = data;
    });

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

  mostrarPacientesAtendidos(): any[] {
    let array: any[] = [];
  
    if(!this.pacienteElegido)
    {
      this.pacientes.forEach(p => {
        this.turnos.forEach(turno => {
          if (turno.especialista.dni === this.usuario.dni && p.dni === turno.paciente.dni && turno.estado === 'finalizado') 
          {
            p.historial_clinico.forEach((h:any) => {
              if(turno.fecha === h.fecha)
              {
                array.push({apellido: p.apellido, especialidad: turno.especialidad, fecha: turno.fecha, presion: h.presion, peso: h.peso, altura: h.altura, temperatura: h.temperatura});
              }
            });
          }
        });
      });
    }
    else
    {
      this.turnos.forEach(turno => {
        if (turno.especialista.dni === this.usuario.dni && this.pacienteElegido.dni === turno.paciente.dni && turno.estado === 'finalizado') 
        {
          this.pacienteElegido.historial_clinico.forEach((h:any) => {
            if(turno.fecha === h.fecha)
            {
              array.push({apellido: this.pacienteElegido.apellido, especialidad: turno.especialidad, fecha: turno.fecha, presion: h.presion, peso: h.peso, altura: h.altura, temperatura: h.temperatura});
            }
          });
        }
      });
    }
  
    return array;
  }

  obtenerColumnas(array: any): string[] 
  {
    let devuelve: string[] = [];
    if (array.length !== 0) 
    {
      Object.keys(array[0]).forEach((element:any) => {
        //alert(JSON.stringify(array))
        devuelve.push(element);
      });
    }
    
    return devuelve;
  }
}
