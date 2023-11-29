import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent {
  user: any;
  admins: any[] = [];
  pacientes: any[] = [];
  especialistas: any[] = [];
  turnos: any[] = [];

  rutaActual: any;
  busqueda: string = '';
  comentario: string = '';
  foto: string = '';
  turno: any;
  modal: boolean = false;
  fechaActual: Date = new Date();
  botones = true;
  cancelar = false;

  constructor(private auth: AuthService,private toast: ToastrService, private firestore: Firestore, private router: Router)
  {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = event.url;
      }
    });

    FirestoreService.traerFs('turnos', this.firestore, 'fecha').subscribe((data)=>{
      this.turnos = data;
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

  obtenerColumnas(array: any): string[] 
  {
    let devuelve: string[] = [];
    if (array.length !== 0) 
    {
      Object.keys(array[0]).forEach((element:any) => {
        if(element != 'resenia' && element != 'comentario')
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
    this.botones = true;
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
  
    const resultadosFiltrados = [];
  
    for (const turno of this.turnos) {
      const especialidad = turno['especialidad'];
      const especialista = turno['especialista'];
  
      if (
        (especialidad && especialidad.toString().toLowerCase().includes(letraBuscada)) ||
        (especialista && especialista.apellido?.toString().toLowerCase().includes(letraBuscada))
      ) {
        resultadosFiltrados.push(turno);
      }
    }
  
    return resultadosFiltrados;
  }

  evaluar(turno:any, accion:string) : boolean
  {
    let retorno = false;

    switch(accion)
    {
      case 'cancelar':
        if(this.fechaActual < this.construirFecha(turno.fecha) && turno.estado === 'pendiente')
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

  actualizar(turno: any, estado: string)
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
