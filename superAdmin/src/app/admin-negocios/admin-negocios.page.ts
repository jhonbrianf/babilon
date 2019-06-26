import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Negocio } from '../interface/negocio';
import { NegociosService } from '../services/negocios.service';

@Component({
  selector: 'app-admin-negocios',
  templateUrl: './admin-negocios.page.html',
  styleUrls: ['./admin-negocios.page.scss'],
})
export class AdminNegociosPage implements OnInit {

  negocios: Negocio[] = [];
  constructor(
    private router: Router,
    private negocioService: NegociosService) {
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

  detalleNegocio(item) {
    this.router.navigate(['/admin-detalle-negocio', item.key]);
  }

  agregarNegocio() {
    this.router.navigate(['/admin-agregar-negocio']);
  }

  actualizarNegocio(item) {
    this.router.navigate(['/admin-actualizar-negocio', item.key]);
  }

  eliminarNegocio(item) {

  }
}
