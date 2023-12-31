import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent 
{
  form: FormGroup;
  email: string = ''; 
  clave: string = ''; 
  mensaje: string = '';
  pacientes: any[] = [];
  especialistas: any[] = [];
  administradores: any[] = [];
  usuarios: any[] = [];
  usuariosRapidos: any[] = [
    "vipaf54245@ikanid.com", 
    "fannoiffollesou-9950@yopmail.com",
    "tuweunnuppoudu-9187@yopmail.com",
    "xewunnubraza-2965@yopmail.com",
    "atienzotomi@gmail.com",
    "zekufrebraule-3628@yopmail.com"
  ];

  observablePac:any;
  observableEsp: any;
  observableAdmins: any;

  constructor(private auth: AuthService, private formBuilder: FormBuilder, private toast: ToastrService, private router: Router, private firestore: Firestore)
  {
    this.form = this.formBuilder.group(
    {
      email: ['', [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/), Validators.email]],
      clave: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit()
  {
    FirestoreService.traerFs('usuarios', this.firestore).subscribe((data)=>{
      this.usuarios = data;
      data.forEach((u)=>{
        if(u.perfil === 'administrador')
        { 
          this.administradores.push(u);
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
      })
    });
  }

  ngOnDestroy()
  {
    if (this.observableAdmins) {
      this.observableAdmins.unsubscribe();
    }
    
    if (this.observableEsp) {
      this.observableEsp.unsubscribe();
    }

    if(this.observablePac)
    {
      this.observablePac.unsubscribe();
    }
  }

  ingresar()
  {
    this.auth.signin(this.email, this.clave)?.then((data)=>{
      const user = data.user;
      let userPaciente:any;
      let userEsp:any;
      let admin:any;
      
      this.pacientes.forEach((u)=>{
        if(user.email === u.email)
        {
          userPaciente = u;
        }
      })
      
      if(userPaciente)
      {
        if(!user.emailVerified)
        {
          this.toast.error('Debe verificar el correo electronico para ingresar', "Error");
          this.auth.logout()?.then((data)=>{
            console.log(data);
          });
        }
        else
        {
          const fechaActual = new Date();
          const dia = fechaActual.getDate();
          const mes = fechaActual.getMonth() + 1;
          const anio = fechaActual.getFullYear();
          const fechaFormateada = `${dia.toString().padStart(2, '0')}-${mes.toString().padStart(2, '0')}-${anio.toString()}`;

          const horas = fechaActual.getHours();
          const minutos = fechaActual.getMinutes();
          const segundos = fechaActual.getSeconds();
          const horaFormateada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

          FirestoreService.guardarFs('logs', {usuario: userPaciente, fecha: fechaFormateada, hora: horaFormateada}, this.firestore);
          this.mostrarMensajeIngreso();
        }
      }
      else
      {
        this.especialistas.forEach((e)=>{
          if(user.email === e.email)
          {
            userEsp = e;
          }
        })

        if(userEsp)
        {
          if(userEsp.aprobado === true && user.emailVerified)
          {
            const fechaActual = new Date();
            const dia = fechaActual.getDate();
            const mes = fechaActual.getMonth() + 1;
            const anio = fechaActual.getFullYear();
            const fechaFormateada = `${dia.toString().padStart(2, '0')}-${mes.toString().padStart(2, '0')}-${anio.toString()}`;

            const horas = fechaActual.getHours();
            const minutos = fechaActual.getMinutes();
            const segundos = fechaActual.getSeconds();
            const horaFormateada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;

            FirestoreService.guardarFs('logs', {usuario: userEsp, fecha: fechaFormateada, hora: horaFormateada}, this.firestore);
            this.mostrarMensajeIngreso();
          }
          else
          {
            if(!user.emailVerified)
            {
              if(userEsp.aprobado == 'espera')
              {
                this.toast.info('Su usuario está pendiente de aprobacion y debe verificar su email.');
              }
              else
              {
                if(!userEsp.aprobado)
                {
                  this.toast.error('Ha sido rechazado por un administrador.', "Error");
                  this.email = '';
                  this.clave = '';
                  this.auth.logout()?.then((data)=>{
                    console.log(data);
                  });
                }
                else
                {
                  this.toast.info('Ha sido aprobado por un administrador, pero debe verificar su mail para poder ingresar');
                }
              }
            }
            else
            {
              if(userEsp.aprobado == 'espera')
              {
                this.toast.info('Su usuario está pendiente de aprobacion.');
              }
              else
              {
                if(!userEsp.aprobado)
                {
                  this.toast.error('Ha sido rechazado por un administrador.', "Error");
                  this.email = '';
                  this.clave = '';
                  this.auth.logout()?.then((data)=>{
                    console.log(data);
                  });
                }
                else
                {
                  const fechaActual = new Date();
                  const dia = fechaActual.getDate();
                  const mes = fechaActual.getMonth() + 1;
                  const anio = fechaActual.getFullYear();
                  const fechaFormateada = `${dia.toString().padStart(2, '0')}-${mes.toString().padStart(2, '0')}-${anio.toString()}`;
      
                  const horas = fechaActual.getHours();
                  const minutos = fechaActual.getMinutes();
                  const segundos = fechaActual.getSeconds();
                  const horaFormateada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
        
                  FirestoreService.guardarFs('logs', {usuario: userEsp, fecha: fechaFormateada, hora: horaFormateada}, this.firestore);
        
                  this.mostrarMensajeIngreso();
                }
              }
            }
          }
        }
        else
        {
          this.administradores.forEach((a)=>{
            if(user.email === a.email)
            {
              admin = a;
            }
          });

          if(admin)
          {
            const fechaActual = new Date();
            const dia = fechaActual.getDate();
            const mes = fechaActual.getMonth() + 1;
            const anio = fechaActual.getFullYear();
            const fechaFormateada = `${dia.toString().padStart(2, '0')}-${mes.toString().padStart(2, '0')}-${anio.toString()}`;

            const horas = fechaActual.getHours();
            const minutos = fechaActual.getMinutes();
            const segundos = fechaActual.getSeconds();
            const horaFormateada = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
  
            FirestoreService.guardarFs('logs', {usuario: admin, fecha: fechaFormateada, hora: horaFormateada}, this.firestore);
  
            this.mostrarMensajeIngreso();
          }
        }
      }
    })
    .catch((error)=>{
      console.log(error);
      switch(error.code)
      {
        case 'auth/invalid-email':
          this.mensaje =  "Correo inválido.";
        break;
        case 'auth/missing-password':
          this.mensaje = "Contraseña inválida.";
        break;
        case 'auth/invalid-login-credentials':
          this.mensaje = 'Correo y/o contraseña incorrectos.';
        break;
      }
      
      this.toast.error(this.mensaje, 'Error');   
    });
  }

  mostrarMensajeIngreso()
  {
    this.toast.success("Ingresando...", 'Perfecto');
    this.email = '';
    this.clave = '';
  
    setTimeout(()=>{
      this.router.navigate(['/home']);
    }, 1500); 
  }

  traerUser(correo: string)
  {
    let user:any = false;

    this.usuarios.forEach((u)=>{
      if(u.email === correo)
      {
        user = u;
      }
    });

    return user;
  }
}
