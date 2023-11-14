import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent 
{
  especialistas:any[] = [];
  aux:any[] = [];

  mostrarModal = false;
  userModal:any;

  constructor(private firestore: Firestore, private toast: ToastrService)
  {
    FirestoreService.traerFs('usuarios', this.firestore).subscribe((data)=>{
      this.aux = data;
      this.especialistas = [];
      data.forEach((e)=>{
        if(e.perfil === 'especialista')
        {
          this.especialistas.push(e);
        }
      });
    });
  }

  ngOnInit()
  {}

  mostrar(obj:any)
  {
    this.mostrarModal = true;
    this.userModal = obj;
  }

  decidir(decision:boolean)
  {
    let obj = {...this.userModal};
    obj.aprobado = decision;
    //console.log(obj.id);
    FirestoreService.actualizarFs('usuarios', obj, this.firestore).then(()=>{
      let mensaje = decision ? `${this.userModal.nombre} ha sido aprobado/a` : `${this.userModal.nombre} ha sido rechazado/a`;
      this.mostrarModal = false;
      this.toast.info(mensaje);
    });
  }
}
