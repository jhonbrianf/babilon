import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminActualizarNegocioPage } from './admin-actualizar-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: AdminActualizarNegocioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminActualizarNegocioPage]
})
export class AdminActualizarNegocioPageModule {}
