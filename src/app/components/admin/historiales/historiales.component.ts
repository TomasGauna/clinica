import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-historiales',
  templateUrl: './historiales.component.html',
  styleUrls: ['./historiales.component.scss']
})
export class HistorialesComponent {
  pacientes: any[] = [];
  observable: any;
  busqueda: string = '';
  pacienteElegido: any;

  constructor(private firestore: Firestore) {}

  ngOnInit()
  {
    this.observable = FirestoreService.traerFs('usuarios', this.firestore).subscribe((data)=>{
      this.pacientes = [];
      data.forEach(u => {
        if(u.perfil === 'paciente')
        {
          this.pacientes.push({nombre: u.nombre, apellido: u.apellido, edad: u.edad, dni: u.dni, obraSocial: u.obraSocial, historial: u.historial_clinico});
        }
      });
    });
  }

  ngOnDestroy()
  {
    if(this.observable)
    {
      this.observable.unsubscribe();
    }
  }

  obtenerColumnas(array: any): string[] 
  {
    let devuelve: string[] = [];
    
    if (array.length !== 0) 
    {
      Object.keys(array[0]).forEach((element:any) => {
        if(element !== 'historial')
        {
          devuelve.push(element);
        }
      });
    }
    return devuelve;
  }
}
