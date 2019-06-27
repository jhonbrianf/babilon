import { Component, OnInit } from '@angular/core';
import { NegociosService } from '../services/negocios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Negocio } from '../interface/negocio';

@Component({
  selector: 'app-cliente-detalles-negocio',
  templateUrl: './cliente-detalles-negocio.page.html',
  styleUrls: ['./cliente-detalles-negocio.page.scss'],
})
export class ClienteDetallesNegocioPage implements OnInit {
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

  obtenerDatos() {
    this.idNegocioObtenido = this.activeRoute.snapshot.paramMap.get('idNegocio');
    this.negocioService.obtenerDatos(this.idNegocioObtenido).valueChanges().subscribe((resultado: Negocio) => {
      this.negocio = resultado;
      console.log(this.negocio);
    });
  }

  reservarSalon() {
    this.router.navigate(['/cliente-reserva', this.idNegocioObtenido]);
  }

}
