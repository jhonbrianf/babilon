import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Negocio } from '../interface/negocio';
import { NegociosService } from '../services/negocios.service';

@Component({
  selector: 'app-admin-detalle-negocio',
  templateUrl: './admin-detalle-negocio.page.html',
  styleUrls: ['./admin-detalle-negocio.page.scss'],
})
export class AdminDetalleNegocioPage implements OnInit {

   // Variables
   negocio: Negocio;
   idNegocioObtenido: string;
   
  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private negocioService: NegociosService) {
    //Inicializacion del contructor
    //inicializando la interface de negocio
    this.negocio = {
      $key: "", nombre: "", costo: 0, ubicacion: "", latitud: 0, longitud: 0, estado: "",
      detalle: {
        bar: false, capasidad: 0, escenario: false, garage: false, garsones: 0, servicioComida: false, tipoSalon: ""
      },
      imagen:"",
      idadministrador:"",
      nrocontacto:""
    }
  }

  ngOnInit() {
    this.obtenerDatos();
  }

  actualizarNegocio() {
    this.router.navigate(['/admin-actualizar-negocio', this.idNegocioObtenido]);
  }

  obtenerDatos() {
    this.idNegocioObtenido = this.activeRoute.snapshot.paramMap.get('idNegocio');
    this.negocioService.obtenerDatos(this.idNegocioObtenido).valueChanges().subscribe((resultado: Negocio) => {
      this.negocio = resultado;
    });
  }
}
