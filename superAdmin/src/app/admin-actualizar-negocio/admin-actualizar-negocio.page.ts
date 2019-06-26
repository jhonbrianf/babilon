import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router, ActivatedRoute } from '@angular/router';
import { Negocio } from '../interface/negocio';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin-actualizar-negocio',
  templateUrl: './admin-actualizar-negocio.page.html',
  styleUrls: ['./admin-actualizar-negocio.page.scss'],
})
export class AdminActualizarNegocioPage implements OnInit {

  negocio: Negocio;
  db$: any;
  idObtenido: string;

  constructor(private router: Router, private db: AngularFireDatabase, private activeRoute: ActivatedRoute) {
  
    this.idObtenido = this.activeRoute.snapshot.paramMap.get('id');
    this.obtenerDatos();
  }

  ngOnInit() {
    this.db$ = this.db.list('/negocios');

  }

  obtenerDatos() {
    var idNegocio = this.idObtenido;
    var ref = firebase.database().ref('negocios/');
    ref.once("value")
      .then((resultado) => {
        var negocio = resultado.child(idNegocio).val();
        console.log(negocio);
      });
  }

  actualizar(forms) {

  }

  atras() {
    this.router.navigateByUrl('/admin-negocios');
  }
}
