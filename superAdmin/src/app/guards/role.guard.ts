import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  actual:any;
  constructor(private router: Router,private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth.getCurrentUser()
      .then(user => {   
      this.auth.getCurrentNivel(user.email).then(usuario=>{
      if(usuario[0].payload.val().nivel==route.data.nivel){
        return resolve(true);
      }else{
        this.router.navigate(['/login']);
        return resolve(false);
      }
      })
      }, err => {
        this.router.navigate(['/login']);
        return resolve(false);
      })
    })
  }
  
}
