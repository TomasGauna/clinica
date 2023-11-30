import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { SolicitarTurnoComponent } from './components/solicitar-turno/solicitar-turno.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';

const routes: Routes = [
  { path: 'login', component:LoginComponent },
  { path: 'registro', component:RegistroComponent },
  { path: 'error', component:ErrorComponent},
  { 
    path: 'home', 
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule), 
    data: { animation: 'inicio' } 
  },
  { 
    path: 'usuarios', 
    loadChildren: () => import('./modules/usuarios/usuarios.module').then(m => m.UsuariosModule),
    data: { animation: 'usuarios' }
  },
  { 
    path: 'mis-turnos', 
    loadChildren: () => import('./modules/mis-turnos/mis-turnos.module').then(m => m.MisTurnosModule),
    data: { animation: 'turnos'}
  },
  { path: 'turnos', component:TurnosComponent},
  { 
    path: 'solicitar-turnos', 
    component:SolicitarTurnoComponent, 
    data: { animation: 'solicitar-turnos'} 
  },
  { path: 'perfil', component:PerfilComponent },
  { 
    path: 'pacientes', 
    component:PacientesComponent, 
    data: { animation: 'pacientes'} 
  },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'error', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
