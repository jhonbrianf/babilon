import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Negocio } from '../interface/negocio';

@Injectable({
  providedIn: 'root'
})
export class NegociosService {

  // Variables
  listaNegocios: Observable<any[]>;
  referenciaNegocios: AngularFireList<any>;
  
  constructor(
    private dbFirebase: AngularFireDatabase) {
    //Inicializacion del constructor
    this.referenciaNegocios = this.dbFirebase.list('/negocios');
    this.listaNegocios = this.referenciaNegocios.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      }));
  }

  crear(negocio: Negocio){
    return this.referenciaNegocios.push(negocio);
  }

  actualizar(idNegocio: string, negocio: any){
    return this.referenciaNegocios.update(idNegocio, negocio);
  }

  eliminar(idNegocio: string){
    this.dbFirebase.object('/negocios/' + idNegocio).remove();
  }

  listar():Observable<Negocio[]>{
    return this.listaNegocios;
  }

  obtenerDatos(idNegocio: string){
    return this.dbFirebase.object('/negocios/' + idNegocio);
  }
}
