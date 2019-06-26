import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Negocio } from '../interface/negocio';
import { NegociosService } from '../services/negocios.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-admin-agregar-negocio',
  templateUrl: './admin-agregar-negocio.page.html',
  styleUrls: ['./admin-agregar-negocio.page.scss'],
})
export class AdminAgregarNegocioPage implements OnInit {

  negocio: Negocio;
  db$: any;

  constructor(
    private router: Router,
    private negocioService: NegociosService,
    private toastController: ToastController) {
    // Inicializacion de constructor
  }

  ngOnInit() {
    
  }

  guardar(form: any) {
    this.negocioService.crear(form.value).then(resultado=>{
      this.router.navigateByUrl('/admin-negocios');
      this.mensajeToast("Registro Agregado Exitosamente.")
    });
  }

  async mensajeToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }
}
