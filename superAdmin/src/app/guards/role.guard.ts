import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  actual:any;
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (route.data.nivel==1) {
      return true;
  }
  if (route.data.nivel==2) {
    return true;
}
if (route.data.nivel==2) {
  return true;
}
    // navigate to not found page
    this.router.navigate(['home']);
    return false;
  }
  
}
