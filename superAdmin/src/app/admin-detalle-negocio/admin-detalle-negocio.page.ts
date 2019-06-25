import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-detalle-negocio',
  templateUrl: './admin-detalle-negocio.page.html',
  styleUrls: ['./admin-detalle-negocio.page.scss'],
})
export class AdminDetalleNegocioPage implements OnInit {

  nombre:string="Moes";
  bar: boolean =true;
  capacidad: number=18;
  escenario: boolean=true;
  garaje: boolean=true;
  garsones: number=22;
  servicio_comida:boolean=true;
  tipo_salon:string="Aire Libre";


  constructor(private router:Router,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }
  Negocio(){
    this.router.navigateByUrl('/admin-negocios');
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Modificación',
      message: 'Desea modificar sus datos?',
      buttons: ['OK']
    });

    await alert.present();
  }

}
