import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClienteDetallesNegocioPage } from './cliente-detalles-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteDetallesNegocioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClienteDetallesNegocioPage]
})
export class ClienteDetallesNegocioPageModule {}
