import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.page.html',
  styleUrls: ['./detail-user.page.scss'],
})
export class DetailUserPage implements OnInit {
  usuario:Usuarios;
  constructor(private user:UsersService,private router: Router,private route: ActivatedRoute) {
    this.usuario = {nombre:"",apellidos:"",edad:0,correo:"",nivel:2,password:"",estado:true};
   }

  ngOnInit() {
    let key= this.route.snapshot.paramMap.get("id");
    this.user.view(key).valueChanges().subscribe((data:Usuarios)=>{
    this.usuario=data;
  }
    )}
}
