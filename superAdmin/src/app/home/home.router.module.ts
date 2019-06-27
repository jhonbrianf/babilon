import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'cliente-detalle',
        children: [
          {
            path: '',
            loadChildren:'../cliente-detalles-negocio/cliente-detalles-negocio.module#ClienteDetallesNegocioPageModule'
          }
        ]
      },
      {
        path: 'cliente-mapa',
        children: [
          {
            path: '',
            loadChildren:'../client-mapgoogle/client-mapgoogle.module#ClientMapgooglePageModule'
          }
        ]
      },     
      {
        path: '',
        redirectTo: '/home/cliente-mapa',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/cliente-mapa',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
