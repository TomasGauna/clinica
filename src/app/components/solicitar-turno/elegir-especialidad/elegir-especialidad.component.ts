import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-elegir-especialidad',
  templateUrl: './elegir-especialidad.component.html',
  styleUrls: ['./elegir-especialidad.component.scss']
})
export class ElegirEspecialidadComponent {
  @Output() especialidadEnviada = new EventEmitter<string>();
  @Input() especialista: any;

  constructor(){}

  quitarTildesYMinusculas(cadena:string) 
  {
    let cadenaSinTildes = cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let cadenaEnMinusculas = cadenaSinTildes.toLowerCase();
    return cadenaEnMinusculas;
  }

  getImagePath(nombreEspecialidad: string): string 
  {
    return `assets/especialidades/${nombreEspecialidad}.png`;
  }

  setDefaultImage(event: any) 
  {
    event.target.src = 'assets/especialidades/estetoscopio.png';
  }

  enviarEspecialidad(especialidad: string)
  {
    this.especialidadEnviada.emit(especialidad)
  }
}
