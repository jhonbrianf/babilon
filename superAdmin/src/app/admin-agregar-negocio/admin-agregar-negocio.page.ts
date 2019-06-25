import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { Negocio } from '../interface/negocio';


@Component({
  selector: 'app-admin-agregar-negocio',
  templateUrl: './admin-agregar-negocio.page.html',
  styleUrls: ['./admin-agregar-negocio.page.scss'],
})
export class AdminAgregarNegocioPage implements OnInit {

  negocio: Negocio;
  db$: any;

  constructor(private router: Router, private db: AngularFireDatabase) {
  }

  ngOnInit() {
    this.db$ = this.db.list('/negocios');
  }

  guardar(forms) {
    this.negocio = forms.value;
    this.db$.push(this.negocio).then(resultado => {
      this.router.navigateByUrl('/admin-negocios');
    });
  }

  atras() {
    this.router.navigateByUrl('/admin-negocios');
  }
}
