import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RegistroComponent } from './components/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { ListadoComponent } from './components/admin/listado/listado.component';
import { PacienteComponent } from './components/mis-turnos/paciente/paciente.component';
import { EspecialistaComponent } from './components/mis-turnos/especialista/especialista.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AngularFireStorageModule,
    AngularFireModule.initializeApp({"projectId":"clinica-cd258",
    "appId":"1:252489975231:web:7b94256a52773662cf4d0a",
    "storageBucket":"clinica-cd258.appspot.com",
    "apiKey":"AIzaSyAqXh8A0XH2BMCGSgpOYGtjrEcDb0hb9RQ",
    "authDomain":"clinica-cd258.firebaseapp.com",
    "messagingSenderId":"252489975231"}),
    provideFirebaseApp(() => initializeApp({"projectId":"clinica-cd258",
    "appId":"1:252489975231:web:7b94256a52773662cf4d0a",
    "storageBucket":"clinica-cd258.appspot.com",
    "apiKey":"AIzaSyAqXh8A0XH2BMCGSgpOYGtjrEcDb0hb9RQ",
    "authDomain":"clinica-cd258.firebaseapp.com",
    "messagingSenderId":"252489975231"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),///////////////
  ],
  providers: [
    provideAnimations(),
    provideToastr()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
