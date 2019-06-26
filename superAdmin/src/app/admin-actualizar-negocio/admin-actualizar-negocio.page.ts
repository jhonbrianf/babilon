import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Negocio } from '../interface/negocio';
import { NegociosService } from '../services/negocios.service';

@Component({
  selector: 'app-admin-actualizar-negocio',
  templateUrl: './admin-actualizar-negocio.page.html',
  styleUrls: ['./admin-actualizar-negocio.page.scss'],
})
export class AdminActualizarNegocioPage implements OnInit {

  // Variables
  negocio: Negocio;
  idNegocioObtenido: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private negocioService: NegociosService) {
    //Inicializacion de constructor
    //inicializando la interface de negocio
    this.negocio = {
      $key: "", nombre: "", costo: 0, ubicacion: "", latitud: 0, longitud: 0, estado: "",
      detalle: {
        bar: false, capasidad: 0, escenario: false, garage: false, garsones: 0, servicioComida: false, tipoSalon: ""
      }
    }

  }

  ngOnInit() {
    this.obtenerDatos();
  }

  obtenerDatos() {
    this.idNegocioObtenido = this.activeRoute.snapshot.paramMap.get('idNegocio');
    this.negocioService.obtenerDatos(this.idNegocioObtenido).valueChanges().subscribe((resultado: Negocio) => {
      console.log(resultado);
      this.negocio = resultado;
    });
  }

  actualizar(form: any) {
    this.negocioService.actualizar(this.idNegocioObtenido, form.value).then(resuldato => {
      this.router.navigateByUrl('/admin-negocios');
    });
  }
}
