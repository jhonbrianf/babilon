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
  UsuarioRef: AngularFireList<any>;
  constructor(private db: AngularFireDatabase) {
    this.UsuarioRef = this.db.list('/usuarios');
   this.usuarios= this.UsuarioRef.snapshotChanges().pipe(
   map(changes => {
     return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
   }));
   }

   create(usuario:Usuarios){  
     return  this.UsuarioRef.push(usuario);
   }
   update(key,data){
   return this.UsuarioRef.update(key,data);
   }
   list():Observable<Usuarios[]> {
    return this.usuarios;
  }
   delete(item){
     console.log(item);
    this.db.object('/usuarios/' + item.key).remove();
   }
   view(key){
   return this.db.object('/usuarios/' + key);
   }
}
