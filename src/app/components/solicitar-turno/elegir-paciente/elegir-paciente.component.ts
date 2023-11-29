import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-elegir-paciente',
  templateUrl: './elegir-paciente.component.html',
  styleUrls: ['./elegir-paciente.component.scss']
})
export class ElegirPacienteComponent {
  @Output() pacienteEnviado = new EventEmitter<any>();
  pacientes: any[] = [];
  observable: any;

  constructor(private firestore: Firestore){}

  ngOnInit()
  {
    this.observable = FirestoreService.traerFs('usuarios', this.firestore).subscribe((data)=>{
      data.forEach((u)=>{
        if(u.perfil === 'paciente')
        {
          this.pacientes.push(u);
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

  enviarPaciente(paciente: any)
  {
    this.pacienteEnviado.emit(paciente);
  }
}
