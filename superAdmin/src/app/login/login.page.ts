import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {

  }
  login(form){

  }

  async forgot() {
    const alert = await this.alertController.create({
      header: 'Recuperar cuenta',
      message: 'Ingrese su email para recuperar su cuenta',
      inputs: [
        {
          name: 'email',
          type: 'text',
          placeholder: 'wwwww.email@mail.com'
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
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
}
