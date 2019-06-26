import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutGuardGuard } from './guards/aut-guard.guard';
import { ClienteDetallesNegocioPage } from './cliente-detalles-negocio/cliente-detalles-negocio.page';
import { ClientMapgooglePage } from './client-mapgoogle/client-mapgoogle.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: './home/home.module#HomePageModule', canActivate: [AutGuardGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'list-user', loadChildren: './adminuser/list-user/list-user.module#ListUserPageModule' },
  { path: 'create-user', loadChildren: './adminuser/create-user/create-user.module#CreateUserPageModule' },
  { path: 'update-user', loadChildren: './adminuser/update-user/update-user.module#UpdateUserPageModule' },
  { path: 'admin-negocios', loadChildren: './admin-negocios/admin-negocios.module#AdminNegociosPageModule' },
  { path: 'admin-detalle-negocio/:id', loadChildren: './admin-detalle-negocio/admin-detalle-negocio.module#AdminDetalleNegocioPageModule' },
  { path: 'admin-reservas', loadChildren: './admin-reservas/admin-reservas.module#AdminReservasPageModule' },
  { path: 'admin-agregar-negocio', loadChildren: './admin-agregar-negocio/admin-agregar-negocio.module#AdminAgregarNegocioPageModule' },
  { path: 'admin-actualizar-negocio/:id', loadChildren: './admin-actualizar-negocio/admin-actualizar-negocio.module#AdminActualizarNegocioPageModule' },
  { path: 'client-mapgoogle', loadChildren: './client-mapgoogle/client-mapgoogle.module#ClientMapgooglePageModule' },
  
  
  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
