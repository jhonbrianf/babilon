import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  UsuarioRef: AngularFireList<any>;
  mensaje:string;
  constructor(public menuCtrl: MenuController,private router: Router,private db: AngularFireDatabase,public alertController: AlertController,public afAuth: AngularFireAuth) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }
  
  login(form){
    this.afAuth.auth.signInWithEmailAndPassword(form.email, form.password)
      .then((data) => {
        // on success populate variables and select items
        this.db.list('/usuarios', ref => ref.orderByChild('correo').equalTo(data.user.email)).snapshotChanges().subscribe(usuario=>{
                console.log(usuario[0].payload.val());
          if(usuario[0]){
          let actual=usuario[0].payload.val() as Usuarios;
          if(actual.estado){
          if(actual.nivel==1){
            this.menuCtrl.enable(true);
            this.router.navigateByUrl('/list-user');
          }else
          if(actual.nivel==2){
            this.menuCtrl.enable(true);
            this.router.navigate(['/admin-negocios']);
          }else
          if(actual.nivel==3){
            this.menuCtrl.enable(true);
            this.router.navigate(['/']);
          }
        }else{
          this.mensaje="error usuario no encontrado, es posible que el usuario aya sido  o suspendido"
        }
        }else{
          this.mensaje="error usuario no encontrado, es posible que el usuario aya sido  o suspendido"
        }
        })
      })
      .catch((error) => {
        this.mensaje="error usuario no encontrado, es posible que el usuario aya sido borrado o  suspendido"
      });
  }

  Register(){
    this.router.navigate(['/register-user']);
  }

  async forgot() {
    const alert = await this.alertController.create({
      header: 'Recuperar cuenta',
      message: 'Ingrese su email para recuperar su cuenta',
      inputs: [
        {
          name: 'email',
          type: 'email',
          placeholder: 'ejemplo@mail.com'
        }],
      buttons: [
        {
          text: 'cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'enviar',
          handler: (data) => {
           this.resetPassword(data.email);
          }
        }
      ]
    });

    await alert.present();
  }
  resetPassword(email: string) {
    return this.afAuth.auth.sendPasswordResetEmail(email)
      .then(() => {console.log('sent Password Reset Email!'),alert("email enviado a su correo")})
      .catch((error) => {console.log(error),alert("ocurrio un error");})
  }
}
