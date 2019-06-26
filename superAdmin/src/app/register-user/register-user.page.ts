import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.page.html',
  styleUrls: ['./register-user.page.scss'],
})
export class RegisterUserPage implements OnInit {
  usuario:Usuarios;
  constructor( private user:UsersService,private router: Router,public afAuth: AngularFireAuth,public toastController: ToastController) { 
  }

  ngOnInit() {
  
  }
  
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Usuario registrado con exito, inicie secion',
      duration: 2000
    });
    toast.present();
  }
  register(forms){

       this.usuario=forms.value;
       this.usuario.nivel=3;
       this.usuario.estado=true;
       this.afAuth.auth.createUserWithEmailAndPassword(this.usuario.correo as string, this.usuario.password as string)
       .then(() => {
        delete this.usuario.password;
           // on success hide form and store variables in login
           this.user.create(this.usuario).then(data=>{
             this.presentToast();
            this.router.navigate(['/login']);
          });
       })
       .catch((error) => {
         alert(error);
       });
  }
}
