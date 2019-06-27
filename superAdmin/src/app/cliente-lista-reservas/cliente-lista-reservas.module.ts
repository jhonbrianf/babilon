import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClienteListaReservasPage } from './cliente-lista-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteListaReservasPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClienteListaReservasPage]
})
export class ClienteListaReservasPageModule {}
