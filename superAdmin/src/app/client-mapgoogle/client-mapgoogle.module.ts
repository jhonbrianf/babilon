import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientMapgooglePage } from './client-mapgoogle.page';

const routes: Routes = [
  {
    path: '',
    component: ClientMapgooglePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientMapgooglePage]
})
export class ClientMapgooglePageModule {}
