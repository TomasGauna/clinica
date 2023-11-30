import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { AltaAdminComponent } from 'src/app/components/admin/alta-admin/alta-admin.component';
import { ListadoComponent } from 'src/app/components/admin/listado/listado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HistorialesComponent } from 'src/app/components/admin/historiales/historiales.component';
import { PacienteBotonComponent } from './paciente-boton/paciente-boton.component';


@NgModule({
  declarations: [
    UsuariosComponent,
    AltaAdminComponent,
    ListadoComponent,
    HistorialesComponent,
    PacienteBotonComponent,
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class UsuariosModule { }
