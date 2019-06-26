import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Negocio } from '../interface/negocio';
import { NegociosService } from '../services/negocios.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-admin-negocios',
  templateUrl: './admin-negocios.page.html',
  styleUrls: ['./admin-negocios.page.scss'],
})
export class AdminNegociosPage implements OnInit {
  
  // Variables
  negocios: Negocio[] = [];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private negocioService: NegociosService,
    private toastController: ToastController) {
      //Inicializacion del constructor

   }

  ngOnInit() {
    this.listarNegocios();
  }

  listarNegocios() {
    this.negocios = [];
    this.negocioService.listar().subscribe(resultado => {
      this.negocios = resultado;
    });
  }

  detalleNegocio(item: any) {
    this.router.navigate(['/admin-detalle-negocio', item.key]);
  }

  agregarNegocio() {
    this.router.navigate(['/admin-agregar-negocio']);
  }

  actualizarNegocio(item: any) {
    this.router.navigate(['/admin-actualizar-negocio', item.key]);
  }

  async eliminarNegocio(item: any) {
    const alert = await this.alertController.create({
      header: '¿Desea Eliminar?',
      message: '<strong>Este registro se eliminara permanentemente.</strong>',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Eliminar',
          handler: () => {
            this.eliminar(item);
          }
        }
      ]
    });

    await alert.present();
  }
  
  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  eliminar(item: any) {
    this.negocioService.eliminar(item.key);
    this.mensajeToast("Registro Eliminado Exitosamente.");
  }

}
