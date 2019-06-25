import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutGuardGuard implements CanActivate {
  constructor(private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    console.log(route);

    let authInfo = {
        authenticated: true
    };

    if (!authInfo.authenticated) {
        this.router.navigate(['login']);
        return false;
    }

    return true;
  }
  
}
