import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  db$: any;
  usuarios: Observable<any[]>;
  usuarios2: Observable<any[]>;
  UsuarioRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    let ref1 = this.db.list('/usuarios',ref => ref.orderByChild('estado').equalTo(true));
    let ref2 = this.db.list('/usuarios',ref => ref.orderByChild('estado').equalTo(false));
    this.UsuarioRef = this.db.list('/usuarios');
   this.usuarios= ref1.snapshotChanges().pipe(
   map(changes => {
     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
   }));
   this.usuarios2= ref2.snapshotChanges().pipe(
    map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    }));
   }

   create(usuario:Usuarios){  
     return  this.UsuarioRef.push(usuario);
   }
   update(key,data){
    delete data.key;
   return this.UsuarioRef.update(key,data);
   }
   list():Observable<Usuarios[]> {
    return this.usuarios;
  }
  list2():Observable<Usuarios[]> {
    return this.usuarios2;
  }
   delete(item){
     console.log(item);
    this.db.object('/usuarios/' + item.key).remove();
   }
   view(key){
   return this.db.object('/usuarios/' + key);
   }
}
