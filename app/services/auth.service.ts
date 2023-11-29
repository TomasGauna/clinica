import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  constructor(private auth: Auth){}

  ngOnInit()
  {}

  signin(email: string, password: string)
  {
    let ret;

    try
    {
      ret = signInWithEmailAndPassword(this.auth, email, password);
    }
    catch(error)
    {
      console.log("Error al loguearse: ", error);
      ret = null;
    }

    return ret;
  }

  async signup(email: string, password: string)
  {
    let retorno;

    try
    {
      retorno = createUserWithEmailAndPassword(this.auth, email, password).then((user)=>{
        this.sendEmailVerificacion(user.user).then(()=>{
          console.log("Enviado...");
        }).catch((err)=>{
          console.log(err);
        });
      });
    }
    catch(error)
    {
      console.log("Error en register: ", error);
      retorno = null;
    }

    return retorno;
  }

  logout()
  {
    let ret;

    try
    {
      ret = signOut(this.auth);
    }
    catch(error)
    {
      console.log("Error al desloguarse: ", error);

      ret = null;
    }

    return ret;
  }

  sendEmailVerificacion(user:any)
  {
    return sendEmailVerification(user);
  }

  updateUser(user:User)
  {
    return this.auth.updateCurrentUser(user);
  }

  get_user() : User | null
  {
    return this.auth.currentUser;
  }
}
