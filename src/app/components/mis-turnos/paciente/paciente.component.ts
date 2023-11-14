import { Component, Input } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss']
})
export class PacienteComponent 
{
  @Input() paciente: any;
  turnos: any[] = [];

  constructor(private firestore: Firestore)
  {
    FirestoreService.traerFs('turnos', this.firestore, 'fecha').subscribe((data)=>{
      data.forEach(t => {
        if(t.pacienteDni === this.paciente.dni)
        {
          this.turnos.push(t);
        }
      });//////////////PODRIA HACERLO CON UN INPUT Y MANDARLE LA COLECCION QUE NECESITO
    });
  }


}
