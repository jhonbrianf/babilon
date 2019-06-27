import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Negocio } from '../interface/negocio';
import { NegociosService } from '../services/negocios.service';
import { ToastController } from '@ionic/angular';
import { AngularFireStorage } from '@angular/fire/storage';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx'
import { AuthService } from '../services/auth.service';

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
    private camera: Camera,
    private router: Router,
    private negocioService: NegociosService,
    private toastController: ToastController,
    private afStorage: AngularFireStorage,
    private service: AuthService) {
    // Inicializacion de constructor


  }

  ngOnInit() {
    
  }
 
  guardar(form: any) {
    form.value.imagen = this.nombreImagen;
    this.service.getCurrentNivel(this.service.getCurrentEmail()).then(user=>{
      form.value.idadministrador=user[0].key;
      console.log(form.value);
      this.negocioService.crear(form.value).then(resultado=>{
        
        this.router.navigateByUrl('/admin-negocios');
        this.mensajeToast("Registro Agregado Exitosamente.")
      });
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

  subirImagen2(event) {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
 alert(imageData);
   
      // Handle error
     });
  
    }
    //http://www.offlineprogrammer.com/upload-images-firebase-storage-using-ionic-framework/
  filechoosser(element) {
    element.click();
  }
  encodeImageUri(imageUri, callback) {
    var c = document.createElement('canvas');
    var ctx = c.getContext("2d");
    var img = new Image();
    img.onload = function () {
      var aux:any = this;
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img, 0, 0);
      var dataURL = c.toDataURL("image/jpeg");
      callback(dataURL);
    };
    img.src = imageUri;
  };
}
