import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-especialista-fab',
  templateUrl: './especialista-fab.component.html',
  styleUrls: ['./especialista-fab.component.scss']
})
export class EspecialistaFabComponent {
  @Input() especialista: any;
}
