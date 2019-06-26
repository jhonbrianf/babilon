import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.page.html',
  styleUrls: ['./update-user.page.scss'],
})
export class UpdateUserPage implements OnInit {
usuario:Usuarios;
key:string
  constructor(private user:UsersService,private router: Router,private route: ActivatedRoute) { 
    this.usuario = {nombre:"",apellidos:"",edad:0,correo:"",nivel:2,password:"",estado:false};
  }

  ngOnInit() {
   this.key= this.route.snapshot.paramMap.get("id");
   this.user.view(this.key).valueChanges().subscribe((data:Usuarios)=>{
   this.usuario=data;
   });

  }

  actualizar(forms){
this.user.update(this.key,forms.value).then(data=>{
  this.router.navigate(['/list-user']);
});
  }

}
