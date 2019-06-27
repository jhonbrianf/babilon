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
  usuariosInactivos:Usuarios[]=[];
  segmento:string="activos";
  constructor( private user:UsersService, private db: AngularFireDatabase,private router: Router) { 
  
  }
  segmentChanged(ev: any) {
    this.segmento=ev.detail.value;
  }
  ngOnInit() {
  this.user.list().subscribe(data=>{

this.usuarios=data;
  })
  this.user.list2().subscribe(data=>{
this.usuariosInactivos=data;
  })
  }
  suspender(item){
    item.estado=false;


    this.user.update(item.key,item).then(data=>{
    });
      }
      activar(item){
        item.estado=true;
        this.user.update(item.key,item).then(data=>{

        });
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
  
  detail(item){
    this.router.navigate(['detail-user/'+item.key]);
  }
}
