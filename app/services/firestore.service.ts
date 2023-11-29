import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, doc, updateDoc, collectionData, deleteDoc, getDocs, orderBy, query } from '@angular/fire/firestore';
import { BehaviorSubject, Observable, catchError, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  private dataSubject = new BehaviorSubject<any[]>([]);
  data$ = this.dataSubject.asObservable();

  static guardarFs(col: string, params:any, firestore: Firestore)
  {   
    let coleccion = collection(firestore, col);
/*     addDoc(coleccion, params);
    return params; */
    return addDoc(coleccion, params);
  }

  static traerFs(col: string, firestore: Firestore, orderByField: string = ''): Observable<any[]>
  {
    const colRef = collection(firestore, col);
    let q;
    if(orderByField)
    {
      q = query(colRef, orderBy(orderByField, "asc"));
    }
    else
    {
      q = query(colRef);
    }
    return collectionData(q, {idField: 'id'}) as Observable<any[]>;
  }

  static async actualizarFs(col: string, obj: any, firestore: Firestore) 
  {
      const docRef = doc(firestore, col, obj.id);
  
      try 
      {
        await updateDoc(docRef, obj);
        return 'Registro actualizado correctamente.';
      } 
      catch (error) 
      {
        console.error('Error al actualizar el registro en Firestore:', error);
        throw error;
      }
  } 

/*   static eliminarFs(col: string, docId: string, firestore: Firestore): Observable<void> {
    const docRef = doc(firestore, col, docId);
    
    return from(deleteDoc(docRef)).pipe(
      catchError((error) => {
        console.error(`Error al eliminar el documento con ID ${docId}:`, error);
        throw error;
      })
    );
  } */
}

