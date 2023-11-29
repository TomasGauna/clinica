import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { TurnosComponent } from './components/turnos/turnos.component';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { SolicitarTurnoComponent } from './components/solicitar-turno/solicitar-turno.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { register } from 'swiper/element/bundle';
import { MesPipe } from './pipes/mes.pipe';
import { ElegirEspecialistaComponent } from './components/solicitar-turno/elegir-especialista/elegir-especialista.component';
import { ElegirEspecialidadComponent } from './components/solicitar-turno/elegir-especialidad/elegir-especialidad.component';
import { MostrarElegidoComponent } from './components/solicitar-turno/mostrar-elegido/mostrar-elegido.component';
import { ElegirDiaComponent } from './components/solicitar-turno/elegir-dia/elegir-dia.component';
import { ElegirHoraComponent } from './components/solicitar-turno/elegir-hora/elegir-hora.component';
import { ElegirPacienteComponent } from './components/solicitar-turno/elegir-paciente/elegir-paciente.component';
register();

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    ErrorComponent,
    TurnosComponent,
    SolicitarTurnoComponent,
    PerfilComponent,
    MesPipe,
    ElegirEspecialistaComponent,
    ElegirEspecialidadComponent,
    MostrarElegidoComponent,
    ElegirDiaComponent,
    ElegirHoraComponent,
    ElegirPacienteComponent,
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
    RecaptchaModule,
    RecaptchaFormsModule,
    // RecaptchaV3Module,
  ],
  providers: [
    provideAnimations(),
    provideToastr(),
/*     {
      provide: RECAPTCHA_V3_SITE_KEY,
      useValue: '6Lc3KBEpAAAAAJM_4vwLHVnWq4JaNzo53aSL6R_8',//6Ld_IxEpAAAAAMmHBkVEMN0NZ5g4qCsT6OCLLYu3
    }, */
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
