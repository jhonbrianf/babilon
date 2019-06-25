import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-admin-negocios',
  templateUrl: './admin-negocios.page.html',
  styleUrls: ['./admin-negocios.page.scss'],
})
export class AdminNegociosPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  detalleNegocio(){
    this.router.navigateByUrl('/admin-detalle-negocio');
  }

  async agregarNegocio(){
    this.router.navigateByUrl('/admin-agregar-negocio');
  }

  editarNegocio(){
    this.router.navigateByUrl('/admin-actualizar-negocio');
  }

  eliminarNegocio(){
    
  }
}
