import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutGuardGuard } from './guards/aut-guard.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule', canActivate: [AutGuardGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'list-user', loadChildren: './adminuser/list-user/list-user.module#ListUserPageModule',canActivate: [AutGuardGuard,RoleGuard], data: {nivel: 1} },
  { path: 'create-user', loadChildren: './adminuser/create-user/create-user.module#CreateUserPageModule',canActivate: [AutGuardGuard] },
  { path: 'update-user/:id', loadChildren: './adminuser/update-user/update-user.module#UpdateUserPageModule',canActivate: [AutGuardGuard] },
  { path: 'admin-negocios', loadChildren: './admin-negocios/admin-negocios.module#AdminNegociosPageModule',canActivate: [AutGuardGuard] },
  { path: 'admin-detalle-negocio/:id', loadChildren: './admin-detalle-negocio/admin-detalle-negocio.module#AdminDetalleNegocioPageModule',canActivate: [AutGuardGuard] },
  { path: 'admin-reservas', loadChildren: './admin-reservas/admin-reservas.module#AdminReservasPageModule',canActivate: [AutGuardGuard] },
  { path: 'admin-agregar-negocio', loadChildren: './admin-agregar-negocio/admin-agregar-negocio.module#AdminAgregarNegocioPageModule',canActivate: [AutGuardGuard] },
  { path: 'admin-actualizar-negocio/:id', loadChildren: './admin-actualizar-negocio/admin-actualizar-negocio.module#AdminActualizarNegocioPageModule',canActivate: [AutGuardGuard] },
  { path: 'detail-user/:id', loadChildren: './adminuser/detail-user/detail-user.module#DetailUserPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
