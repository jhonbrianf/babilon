import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminDetalleNegocioPage } from './admin-detalle-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: AdminDetalleNegocioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminDetalleNegocioPage]
})
export class AdminDetalleNegocioPageModule {}
