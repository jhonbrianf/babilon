import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.page.html',
  styleUrls: ['./list-user.page.scss'],
})
export class ListUserPage implements OnInit {
  usuarios: Usuarios[]=[];
  constructor( private user:UsersService, private db: AngularFireDatabase,private router: Router) { 
  
  }

  ngOnInit() {
  this.user.list().subscribe(data=>{
    console.log(data);
this.usuarios=data;
  })
  }

  nuevo(){
    this.router.navigate(['create-user']);
  }

  update(item){
    this.router.navigate(['update-user/'+item.key]);
  }
  delete(item){
  this.user.delete(item);
  }
}
