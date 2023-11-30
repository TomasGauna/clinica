import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { AltaAdminComponent } from 'src/app/components/admin/alta-admin/alta-admin.component';
import { ListadoComponent } from 'src/app/components/admin/listado/listado.component';

const routes: Routes = [
  { 
    path: '', 
    component: UsuariosComponent, 
    children: 
    [
      { path: 'alta', component: AltaAdminComponent },
      { path: 'listado', component: ListadoComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
