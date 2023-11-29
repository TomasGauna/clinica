import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mesCorregido'
})
export class MesPipe implements PipeTransform {
  transform(fechaString: string): string {
    const partes = fechaString.split('-');
    if (partes.length !== 3) {
      // La fecha no tiene el formato esperado, devolver la fecha original
      return fechaString;
    }

    const dia = parseInt(partes[0], 10);
    const mes = parseInt(partes[1], 10);
    const año = parseInt(partes[2], 10);

    // Verificar si la fecha es válida
    if (isNaN(dia) || isNaN(mes) || isNaN(año)) {
      return fechaString;
    }

    // Crear una nueva fecha
    const fecha = new Date(año, mes - 1, dia); // Meses en JavaScript comienzan desde 0

    // Verificar si el mes coincide con el mes original
    if (fecha.getMonth() + 1 === mes) {
      // La fecha es válida, devolver la fecha original
      return fechaString;
    }

    // Corregir el mes
    fecha.setMonth(fecha.getMonth()); // Incrementar el mes por 1
    const diaCorregido = 1;
    const mesCorregido = fecha.getMonth() + 1; // Ajustar para que sea el formato esperado
    const añoCorregido = fecha.getFullYear();

    // Devolver la fecha corregida como un string con formato 'dd-mm-yyyy'
    return `${diaCorregido.toString().padStart(2, '0')}-${mesCorregido.toString().padStart(2, '0')}-${añoCorregido}`;
  }
}
