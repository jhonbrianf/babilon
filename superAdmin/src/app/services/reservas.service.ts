import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Reserva } from '../interface/reserva';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {
  // Variables
  listarReservas: Observable<any[]>;
  referenciaReservas: AngularFireList<any>;

  constructor(
    private dbFirebase: AngularFireDatabase) {
    //Inicializacion del constructor
    this.referenciaReservas = this.dbFirebase.list('/reservas');
    this.listarReservas = this.referenciaReservas.snapshotChanges().pipe(
      map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
      }));
  }

  crear(reserva: Reserva) {
    return this.referenciaReservas.push(reserva);
  }

  actualizar(idReserva: string, reserva: any) {
    return this.referenciaReservas.update(idReserva, reserva);
  }

  eliminar(idReserva: string) {
    this.dbFirebase.object('/reservas/' + idReserva).remove();
  }

  listar(): Observable<Reserva[]> {
    return this.listarReservas;
  }

  obtenerDatos(idReserva: string) {
    return this.dbFirebase.object('/reservas/' + idReserva);
  }

  eliminarCampoKey(){
    
  }
}
