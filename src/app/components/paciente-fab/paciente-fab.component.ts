import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paciente-fab',
  templateUrl: './paciente-fab.component.html',
  styleUrls: ['./paciente-fab.component.scss']
})
export class PacienteFabComponent {
  @Input() paciente: any;
}

