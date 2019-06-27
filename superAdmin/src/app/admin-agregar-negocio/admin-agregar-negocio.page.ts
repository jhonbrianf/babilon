import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Negocio } from '../interface/negocio';
import { NegociosService } from '../services/negocios.service';
import { ToastController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-admin-agregar-negocio',
  templateUrl: './admin-agregar-negocio.page.html',
  styleUrls: ['./admin-agregar-negocio.page.scss'],
})
export class AdminAgregarNegocioPage implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef;

  negocio: Negocio;
  db$: any;
  nombreImagen: string;

  constructor(
    private router: Router,
    private negocioService: NegociosService,
    private toastController: ToastController,
    private afStorage: AngularFireStorage) {
    // Inicializacion de constructor


  }

  ngOnInit() {
    
  }

  guardar(form: any) {
    form.value.imagen = this.nombreImagen;
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

  subirImagen(event) {
    alert("llego");
    this.nombreImagen = event.target.files[0].name;
    this.afStorage.upload(event.target.files[0].name , event.target.files[0]);  
  }

  filechoosser() {
    this.fileInput.nativeElement.click();
  }
  
}
