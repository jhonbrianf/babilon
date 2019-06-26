import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Negocios',
      url: '/admin-negocios',
      icon: 'list'
    },
    {
      title: 'Reservas',
      url: '/admin-reservas',
      icon: 'list'
    },
    {
      title: 'Usuarios',
      url: '/list-user',
      icon: 'list'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public afAuth: AngularFireAuth,
    private auth: AuthService,
    private userServ:UsersService
  ) {
    this.auth.authenticated

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.auth.getCurrentEmail();
    });
    this.auth.getCurrentUser().then((user)=>{
      console.log(user.email);
      this.userServ.list2().subscribe((usuarios:Usuarios[])=>{
        usuarios.forEach(element => {
          if(user.email==element.correo){
            this.afAuth.auth.signOut();
            this.router.navigate(['/'])
          }
        });
      })
    })
  }
  logOut(){
    this.afAuth.auth.signOut();
    this.router.navigate(['/'])
  }
}
