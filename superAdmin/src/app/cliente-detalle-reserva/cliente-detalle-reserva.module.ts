import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClienteDetalleReservaPage } from './cliente-detalle-reserva.page';
import { NgCalendarModule } from 'ionic2-calendar';

const routes: Routes = [
  {
    path: '',
    component: ClienteDetalleReservaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCalendarModule
  ],
  declarations: [ClienteDetalleReservaPage]
})
export class ClienteDetalleReservaPageModule {}
