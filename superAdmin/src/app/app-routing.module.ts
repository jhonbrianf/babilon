import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AutGuardGuard } from './guards/aut-guard.guard';

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
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },  { path: 'admin-negocios', loadChildren: './admin-negocios/admin-negocios.module#AdminNegociosPageModule' },
  { path: 'admin-detalle-negocio', loadChildren: './admin-detalle-negocio/admin-detalle-negocio.module#AdminDetalleNegocioPageModule' },
  { path: 'admin-reservas', loadChildren: './admin-reservas/admin-reservas.module#AdminReservasPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
