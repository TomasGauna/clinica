import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paciente-boton',
  templateUrl: './paciente-boton.component.html',
  styleUrls: ['./paciente-boton.component.scss']
})
export class PacienteBotonComponent {
  @Input() paciente: any;
}
