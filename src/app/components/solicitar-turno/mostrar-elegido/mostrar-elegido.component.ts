import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-elegido',
  templateUrl: './mostrar-elegido.component.html',
  styleUrls: ['./mostrar-elegido.component.scss']
})
export class MostrarElegidoComponent {
  @Input() especialistaElegido: any;
  @Input() especialidadElegida: string = '';

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
}
