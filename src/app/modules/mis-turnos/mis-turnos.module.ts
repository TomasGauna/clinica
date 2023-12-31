import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MisTurnosRoutingModule } from './mis-turnos-routing.module';
import { MisTurnosComponent } from './mis-turnos.component';
import { PacienteComponent } from 'src/app/components/mis-turnos/paciente/paciente.component';
import { EspecialistaComponent } from 'src/app/components/mis-turnos/especialista/especialista.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MisTurnosComponent,
    PacienteComponent,
    EspecialistaComponent
  ],
  imports: [
    CommonModule,
    MisTurnosRoutingModule,
    FormsModule
  ]
})
export class MisTurnosModule { }
