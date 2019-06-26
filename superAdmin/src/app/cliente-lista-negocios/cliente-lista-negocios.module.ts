import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClienteListaNegociosPage } from './cliente-lista-negocios.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteListaNegociosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClienteListaNegociosPage]
})
export class ClienteListaNegociosPageModule {}
