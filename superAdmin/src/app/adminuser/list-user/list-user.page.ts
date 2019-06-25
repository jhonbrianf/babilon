import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  users: Usuarios[]=[];
  constructor(private db: AngularFireDatabase,private router: Router) { 
  
  }

  ngOnInit() {
    console.log(this.users);
  this.getList().snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
    
    data.forEach(item => {
      let a = item.payload.toJSON(); 
      a['$key'] = item.key;
      console.log(a);
     this.users.push(a as Usuarios);
    })
  })
  }

  nuevo(){
    this.router.navigate(['create-user']);
  }
  getList(){
    return this.db.list('/usuarios');
  }
  update(){

  }
  delete(item){
    this.users=[];
    this.db.object('/usuarios/' + item.$key).remove();
  }
}
