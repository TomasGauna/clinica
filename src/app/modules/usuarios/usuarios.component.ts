import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {
  user: any;
  admins: any[] = [];
  pacientes: any[] = [];
  especialistas: any[] = [];
  turnos: any[] = [];
  rutaActual: any;
  foto: string = '';
  mostrar: boolean = true;

  constructor(private auth: AuthService,private toast: ToastrService, private firestore: Firestore, private router: Router)
  {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.rutaActual = event.url;
        this.actualizarMostrar();
      }
    });

    if (this.router.url.includes('/alta') || this.router.url.includes('/listado') || this.router.url.includes('/estadisticas')) 
    {
      this.mostrar = false;
    }
  }

  private actualizarMostrar() {
    this.mostrar = !this.rutaActual.includes('/alta') && !this.rutaActual.includes('/listado') && !this.rutaActual.includes('/estadisticas');
  }

  ngOnInit()
  {
    this.actualizarMostrar();

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

  armarExcel(paciente?: any)
  {
    let array: any[] = [];
    let nombre = '';

    if(paciente)
    {
      this.turnos.forEach(turno => {
        if(turno.paciente.dni === paciente.dni)
        {
          array.push({resenia: turno.resenia, comentario: turno.comentario, especialidad: turno.especialidad, estado: turno.estado, paciente: turno.paciente.apellido, especialista: turno.especialista.apellido, hora: turno.hora, fecha: turno.fecha});
        }
      });

      nombre = `turnos_${paciente.dni}`;
    }
    else
    {
      this.turnos.forEach(turno => {

        array.push({paciente: turno.paciente.apellido, resenia: turno.resenia, comentario: turno.comentario, especialidad: turno.especialidad, estado: turno.estado,especialista: turno.especialista.apellido, hora: turno.hora, fecha: turno.fecha});
        
      });
      nombre = `turnos_completos`;
    }

    this.ExportarExcel(array, nombre);
  }

  
  ExportarExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);

    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };

    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    this.guardarExcel(excelBuffer, excelFileName);
  }

  guardarExcel(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(
      data,
      fileName + '_' + new Date().getTime() + EXCEL_EXTENSION
    );
  }
}
