import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AutGuardGuard implements CanActivate {
  authState:boolean=false;
  
  constructor(private router: Router,private auth: AuthService) {}


   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  
       
        if (!this.auth.authenticated) { 
          this.router.navigate(['login']);
          return false;
         }
    return true;
  }
  
}
