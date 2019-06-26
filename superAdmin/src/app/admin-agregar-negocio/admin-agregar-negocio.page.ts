import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Negocio } from '../interface/negocio';
import { NegociosService } from '../services/negocios.service';


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
    private negocioService: NegociosService) {
    // Inicializacion de constructor
  }

  ngOnInit() {
    
  }

  guardar(form: any) {
    this.negocioService.crear(form.value).then(resultado=>{
      this.router.navigateByUrl('/admin-negocios');
    });
  }

  atras() {
    this.router.navigateByUrl('/admin-negocios');
  }
}
