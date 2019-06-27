import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';


const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'cliente-lista-negocios',
        children: [
          {
            path: '',
            loadChildren: '../cliente-lista-negocios/cliente-lista-negocios.module#ClienteListaNegociosPageModule' 
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
        path: 'cliente-lista-reservas',
        children: [
          {
            path: '',
            loadChildren: '../cliente-lista-reservas/cliente-lista-reservas.module#ClienteListaReservasPageModule'
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
