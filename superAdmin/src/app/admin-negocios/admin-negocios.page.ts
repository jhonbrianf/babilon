import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Negocio } from '../interface/negocio';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-admin-negocios',
  templateUrl: './admin-negocios.page.html',
  styleUrls: ['./admin-negocios.page.scss'],
})
export class AdminNegociosPage implements OnInit {

  negocios: Negocio[] = [];
  constructor(private router: Router, private db: AngularFireDatabase) {

   }

  ngOnInit() {
    this.listarNegocios();
  }

  urlConsumo() {
    return this.db.list('/negocios');
  }

  listarNegocios() {
    this.negocios = [];
    this.urlConsumo().snapshotChanges().subscribe(data => {
      data.forEach(item => {
        let negocio = item.payload.toJSON();
        negocio['$key'] = item.key;
        console.log(negocio);
        this.negocios.push(negocio as Negocio);
      })
    })
  }

  detalleNegocio(item) {
    this.router.navigate(['/admin-detalle-negocio', item.$key]);
  }

  agregarNegocio() {
    this.router.navigate(['/admin-agregar-negocio']);
  }

  editarNegocio(item) {
    this.router.navigate(['/admin-actualizar-negocio', item.$key]);
  }

  eliminarNegocio(item) {

  }
}
