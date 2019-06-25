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

  constructor(private router:Router, private db: AngularFireDatabase) {
   }

  ngOnInit() {
  }

  guardar(negocio: Negocio){
    negocio.nombre = "vacio uno";
    
    this.db.list("/negocio").push(negocio).then(result=>{
      console.log(result);
      //this.router.navigateByUrl('/admin-negocio');
    })
    //  this.listaNegocios.push(negocio)
  }

  atras(){
    this.router.navigateByUrl('/admin-negocio');
  }
}
