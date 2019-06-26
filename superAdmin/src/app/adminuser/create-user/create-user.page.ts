import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {
 usuario:Usuarios;
  constructor( private user:UsersService,private router: Router,public afAuth: AngularFireAuth) { 
  }

  ngOnInit() {
  
  }
  register(forms){

       this.usuario=forms.value;
       this.usuario.nivel=1;
       this.usuario.estado=true;
       this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.correo as string, this.usuario.password as string)
       .then(() => {
        delete this.usuario.password;
           // on success hide form and store variables in login
           this.user.create(this.usuario).then(data=>{
            this.router.navigate(['/list-user']);
          });
       })
       .catch((error) => {
         alert(error);
       });
  }
}
