import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'registro', component:RegistroComponent },
  { path: 'error', component:ErrorComponent},
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'usuarios', loadChildren: () => import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'mis-turnos', loadChildren: () => import('./modules/mis-turnos/mis-turnos.module').then(m => m.MisTurnosModule) },
  { path: '**', redirectTo: 'error', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
