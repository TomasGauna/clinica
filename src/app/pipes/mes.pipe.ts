import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesCorregido'
})
export class MesPipe implements PipeTransform {
  transform(fechaString: string): string 
  {
    const partes = fechaString.split('-');
    if (partes.length !== 3) 
    {
      return fechaString;
    }

    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const año = parseInt(partes[2], 10);

    if (isNaN(dia) || isNaN(mes) || isNaN(año)) 
    {
      return fechaString;
    }

    const fecha = new Date(año, mes - 1, dia);

    if (fecha.getMonth() + 1 === mes) 
    {
      return fechaString;
    }

    fecha.setMonth(fecha.getMonth());
    const diaCorregido = 1;
    const mesCorregido = fecha.getMonth() + 1;
    const añoCorregido = fecha.getFullYear();

    return `${diaCorregido.toString().padStart(2, '0')}-${mesCorregido.toString().padStart(2, '0')}-${añoCorregido}`;
  }
}
