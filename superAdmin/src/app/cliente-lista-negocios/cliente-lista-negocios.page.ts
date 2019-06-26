import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NegociosService } from '../services/negocios.service';
import { Negocio } from '../interface/negocio';

@Component({
  selector: 'app-cliente-lista-negocios',
  templateUrl: './cliente-lista-negocios.page.html',
  styleUrls: ['./cliente-lista-negocios.page.scss'],
})
export class ClienteListaNegociosPage implements OnInit {

  //variables
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

  detalleNegocio(item: any) {
    this.router.navigate(['/cliente-detalle-negocio', item.key]);
  }
}
