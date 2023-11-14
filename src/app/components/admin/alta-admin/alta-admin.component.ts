import { Component, Input } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Firestore } from '@angular/fire/firestore';
import { AbstractControl, FormBuilder, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
import { User } from '@angular/fire/auth';

@Component({
  selector: 'app-alta-admin',
  templateUrl: './alta-admin.component.html',
  styleUrls: ['./alta-admin.component.scss']
})
export class AltaAdminComponent 
{
  @Input() currentUser:any;
  form:any;

  nombre: string = '';
  apellido: string = '';
  edad: string = '';
  dni: string = '';
  email: string = '';
  clave: string = '';

  constructor(private auth: AuthService, private angularFirestorage: AngularFireStorage, private formBuilder: FormBuilder, private toast: ToastrService, private firestore: Firestore)
  {
    this.form = this.formBuilder.group(
      {
        nombre: ['', [Validators.required, this.letrasValidator()]],
        apellido: ['', [Validators.required, this.letrasValidator()]],
        dni: ['', [Validators.required,  Validators.minLength(7), Validators.maxLength(8), Validators.pattern('^[0-9]+$'),]],
        edad: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(1), Validators.max(99)]],
        email: ['', [Validators.required, Validators.pattern(/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/), Validators.email]],
        clave: ['', [Validators.required, Validators.minLength(6)]],
      }
    );
  }

  letrasValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      if (value) {
        const trimmedValue = value.trim();
        if (!/^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ \s]+$/.test(trimmedValue)) {
          return { 'invalido': true };
        }
      }
      return null;
    };
  }

  enviar()
  {
    let fotoInput:any = <HTMLInputElement>document.getElementById('foto');

    if(fotoInput.files.length > 0)
    {
      this.auth.signup(this.email, this.clave).then(()=>{
        let col = 'usuarios';
        let params = {nombre: this.nombre, apellido: this.apellido, dni: this.dni, edad: this.edad, email: this.email, perfil: 'administrador'};
        const foto = fotoInput.files[0];
        const nombre = `administradores/${this.dni}/${foto.name}`;
        this.subirFoto(foto, nombre)?.then(()=>{
          const promesa = this.angularFirestorage.ref(nombre).getDownloadURL().toPromise();
            promesa.then((url2: any)=>{
              FirestoreService.guardarFs(col, {...params, foto: url2}, this.firestore);
              this.toast.success("Alta de administrador, realizada con exito.", "Perfecto!");
              this.auth.updateUser(this.currentUser);
            });
        });
      })
      .catch((err)=>{
        this.toast.error(err.code, "Error");
      });
    }
    else
    {
      this.toast.error('Debe subir la foto', 'Error');//tengo que hacer en otro lado el alta del admin
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
}
