import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AdminAgregarNegocioPage } from './admin-agregar-negocio.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAgregarNegocioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminAgregarNegocioPage]
})
export class AdminAgregarNegocioPageModule {}
