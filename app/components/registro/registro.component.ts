import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';
import { startWith } from 'rxjs';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent 
{
  form: FormGroup;
  opciones = document.getElementsByName('opciones');
  //opcion: number = 0;
  especialidad: string = '';
  especialidades: any[] = [];
  especialidadesMostradas:any[] = [];
  especialidadesElegidas: any[] = [];
  nombre: string = '';
  apellido: string = '';
  edad: string = '';
  dni: string = '';
  email: string = '';
  clave: string = '';
  obraSocial: string = '';
  captcha = false;

  observable:any;
  paciente: boolean = false;///////////////////
  especialista: boolean = false;///////////////

  constructor(private router:Router, private auth: AuthService, private angularFirestorage: AngularFireStorage, private formBuilder: FormBuilder, private toast: ToastrService, private firestore: Firestore)
  {
    FirestoreService.traerFs('usuarios', this.firestore).subscribe((data)=>{
      data.forEach((u:any) => {
        if(u.perfil === 'especialista')
        {
          u.especialidad.forEach((e:any) => {
            if(!this.especialidades.includes(e))
            {
              this.especialidades.push(e);
            }
          });
        }
      });
    })

    this.form = this.formBuilder.group(
      {
        nombre: ['', [Validators.required, this.letrasValidator()]],
        apellido: ['', [Validators.required, this.letrasValidator()]],
        dni: ['', [Validators.required,  Validators.minLength(7), Validators.maxLength(8), Validators.pattern('^[0-9]+$'),]],
        edad: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(1), Validators.max(99)]],
        email: ['', [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/), Validators.email]],
        clave: ['', [Validators.required, Validators.minLength(6)]],
        recaptcha: ['', Validators.required],
        especialidad: ['', [this.letrasValidator()]],
        obraSocial: ['', [this.letrasValidator()]],
      }
    );
  }

  ngOnInit()
  {
    
  }
  registrarse()
  {
    let ret = false;
    let pre = {nombre: this.nombre, apellido: this.apellido, dni: this.dni, edad: this.edad, email: this.email};
    let params:any;
    let foto1:any;
    let fotoE:any;
    let perfil = this.especialista === true ? 'especialista' : 'paciente';

    if(perfil == 'paciente')
    {
      if(this.obraSocial != '')
      {
        foto1= <HTMLInputElement>document.getElementById('fotosPaciente');
        const files: FileList | null = foto1.files;

        if(files)
        {
          if(files.length === 2)
          {
            this.auth.signup(this.email, this.clave).then(()=>{
              params = {...pre, obraSocial: this.obraSocial, perfil: perfil};
              const url = files[0];
              const url2 = files[1];
              let nombre = `pacientes/${this.dni}/${this.apellido}_fotos/${url.name}`;

              this.subirFoto(url, nombre)?.then(()=>{
                const promesa = this.angularFirestorage.ref(nombre).getDownloadURL().toPromise();
                promesa.then((url3: any)=>{
                  nombre = `pacientes/${this.dni}/${this.apellido}_fotos/${url2.name}`;
                  this.subirFoto(url2, nombre)?.then(()=>{
                    const promesa2 = this.angularFirestorage.ref(nombre).getDownloadURL().toPromise();
                    promesa2.then((url4: any)=>{
                      FirestoreService.guardarFs('usuarios', {...params, foto: [url3 ,url4]}, this.firestore);
                      this.toast.success("Registrado correctamente, se ha enviado el correo de verificación.", "Perfecto!");
                      this.router.navigate(['/home']);
                    });
                  });
                });
              });
            })
            .catch((err)=>{
              this.toast.error(err.code, "Error");
            });
          }
          else
          {
            this.toast.error('Debe seleccionar 2 imagenes', 'Error');
          }
        }
        else
        {
          this.toast.error('Debe subir las fotos', 'Error');
        }
      }
      else
      {
        this.toast.error('Complete el campo de obra social', 'Error');
      }
    }
    else
    {
      if(this.especialidadesElegidas.length > 0)
      {
        fotoE = <HTMLInputElement>document.getElementById('fotoEspecialista');
        if(fotoE.files.length > 0)
        {
          this.auth.signup(this.email, this.clave).then(()=>{
            params = {...pre, perfil: perfil, especialidad: this.especialidadesElegidas, atencion: []};
            const foto = fotoE.files[0];
            const nombre = `especialistas/${this.especialidadesElegidas}/${this.dni}/${foto.name}`;

            this.subirFoto(foto, nombre).then(()=>{
              const promesa = this.angularFirestorage.ref(nombre).getDownloadURL().toPromise();
              promesa.then((url)=>{
                FirestoreService.guardarFs('usuarios', {...params, foto: url, aprobado: 'espera'}, this.firestore);
                this.toast.success("Registrado correctamente, se encuentra en espera de aceptación y debe verificar el mail", "Perfecto!");
                this.router.navigate(['/home']);
              }); 
            });
          })
          .catch((err)=>{
            let mensaje = 'Error...';
            
            switch(err.code)
            {
              case 'auth/email-already-in-use':
                mensaje = 'El correo electrónico ya se encuentra en uso'
              break;
            }

            this.toast.error(mensaje);
          });
        }
        else
        {
          this.toast.error('Debe ingresar una foto');
        }
      }
      else
      {
        this.toast.error('Debe ingresar una especialidad');
      }
    }
  }

  letrasValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value) {
        const trimmedValue = value.trim();
        if (!/^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/.test(trimmedValue)) {
          return { 'invalido': true };
        }
      }
      return null;
    };
  }

  cambiarCheck(numero: number)
  {
    numero === 1 ? this.especialista = true : this.paciente = true;
    this.especialista === true ? this.obraSocial = '' : this.paciente === true ? this.especialidadesElegidas = [] : this.obraSocial = '', this.especialidad = '';
    if(this.especialista)
    {
      this.especialidades.forEach(e => {
        let ret = true;
        this.especialidadesMostradas.forEach(esp => {
          if(e === esp)
          {
            ret = false;
          }
          console.log(this.especialidades);
          console.log(this.especialidadesMostradas);
        });

        if(ret)
        {
          this.especialidadesMostradas.push(e);
        }
      });
    }
  }

  async subirFoto(url:any, nombre:string)
  {
    try
    {
      const storage = getStorage();
      const storageRef = ref(storage, nombre);
      return uploadBytes(storageRef as any, url as any);
    }
    catch(error)
    {
      console.log("error" + error);
      return;
    }
  }

  agregarEspecialidad(especialidad: string) 
  {
    let index = this.especialidadesElegidas.indexOf(especialidad);

    if (index !== -1) 
    {
      this.especialidadesElegidas.splice(index, 1);
    } 
    else 
    {
      this.especialidadesElegidas.push(especialidad);
    }
    console.log(this.especialidadesElegidas);
    this.especialidad = this.especialidadesElegidas.join(' ');
  }
}
