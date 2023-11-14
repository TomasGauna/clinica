import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{
  private email = '';
  private user:any;

  constructor(private auth: Auth){}

  ngOnInit()
  {
    // this.auth.onAuthStateChanged(user =>{
    //   if(user)
    //   {
    //     this.user = user;
    //   }
    // });
  }

  signin(email: string, password: string)
  {
    let ret;

    try
    {
      this.email = email;
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
      this.email = '';
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

  get_user()
  {
    return this.auth.currentUser;
  }
}
