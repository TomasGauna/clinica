import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-elegir-especialista',
  templateUrl: './elegir-especialista.component.html',
  styleUrls: ['./elegir-especialista.component.scss']
})
export class ElegirEspecialistaComponent 
{
  @Output() especialistaEnviado = new EventEmitter<any>();
  especialistas: any[] = [];
  observableEspecialista : any;

  constructor(private firestore: Firestore)
  {}

  ngOnInit()
  {
    this.observableEspecialista = FirestoreService.traerFs('usuarios', this.firestore).subscribe((data)=>{
      data.forEach((u)=>{
        if(u.perfil === 'especialista')
        {
          this.especialistas.push(u);
        }
      })
    });
  }

  ngOnDestroy()
  {
    if(this.observableEspecialista)
    {
      this.observableEspecialista.unsubscribe();
    }
  }

  enviarEspecialista(e: any)
  {
    this.especialistaEnviado.emit(e);
  }
}
