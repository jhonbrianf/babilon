import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
}
