import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutGuardGuard } from './guards/aut-guard.guard';
import { RoleGuard } from './guards/role.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: './home/home.module#HomePageModule', canActivate: [AutGuardGuard, RoleGuard], data: {nivel:3}
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'list-user', loadChildren: './adminuser/list-user/list-user.module#ListUserPageModule',canActivate: [AutGuardGuard,RoleGuard], data: {nivel: 1} },
  { path: 'create-user', loadChildren: './adminuser/create-user/create-user.module#CreateUserPageModule',canActivate: [AutGuardGuard] },
  { path: 'update-user/:id', loadChildren: './adminuser/update-user/update-user.module#UpdateUserPageModule',canActivate: [AutGuardGuard] },
  { path: 'admin-negocios', loadChildren: './admin-negocios/admin-negocios.module#AdminNegociosPageModule',canActivate: [AutGuardGuard,RoleGuard], data: {nivel:2} },
  { path: 'admin-detalle-negocio/:idNegocio', loadChildren: './admin-detalle-negocio/admin-detalle-negocio.module#AdminDetalleNegocioPageModule',canActivate: [AutGuardGuard] },
  { path: 'admin-reservas', loadChildren: './admin-reservas/admin-reservas.module#AdminReservasPageModule',canActivate: [AutGuardGuard, RoleGuard], data: {nivel:2} },
  { path: 'admin-agregar-negocio', loadChildren: './admin-agregar-negocio/admin-agregar-negocio.module#AdminAgregarNegocioPageModule',canActivate: [AutGuardGuard] },
  { path: 'admin-actualizar-negocio/:idNegocio', loadChildren: './admin-actualizar-negocio/admin-actualizar-negocio.module#AdminActualizarNegocioPageModule',canActivate: [AutGuardGuard] },
  { path: 'detail-user/:id', loadChildren: './adminuser/detail-user/detail-user.module#DetailUserPageModule' },
  { path: 'register-user', loadChildren: './register-user/register-user.module#RegisterUserPageModule' },
  { path: 'cliente-detalle-negocio/:idNegocio', loadChildren:'./cliente-detalles-negocio/cliente-detalles-negocio.module#ClienteDetallesNegocioPageModule' },
  { path: 'cliente-reserva/:idNegocio', loadChildren: './cliente-reserva/cliente-reserva.module#ClienteReservaPageModule' },
  { path: 'cliente-detalle-reserva/:idReserva', loadChildren: './cliente-detalle-reserva/cliente-detalle-reserva.module#ClienteDetalleReservaPageModule' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
