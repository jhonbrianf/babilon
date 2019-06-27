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


   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return new Promise((resolve, reject) => {
      this.auth.getCurrentUser()
      .then(user => {   
        return resolve(true);
      }, err => {
        this.router.navigate(['/login']);
        return resolve(false);
      })
    })
  }
  
}
