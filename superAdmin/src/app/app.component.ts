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
  public appPages1 = [
    {
      title: 'Usuarios',
      url: '/list-user',
      icon: 'list'
    }
  ];

  public appPages2 = [
    {
      title: 'Negocios',
      url: '/admin-negocios',
      icon: 'list'
    },
    {
      title: 'Reservas',
      url: '/admin-reservas',
      icon: 'list'
    }
  ];

  public appPages3 = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    }
  ];

  usuarioNivel: any;

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
      this.userServ.list2().subscribe((usuarios:Usuarios[])=>{
        usuarios.forEach(element => {
          if(user.email==element.correo){
            this.afAuth.auth.signOut();
            this.router.navigate(['/'])
          }
          
          this.loadNivel();
        });
      })
    })
  }
  logOut(){
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login')
  }

  loadNivel(){
    let email = this.auth.email;
    this.auth.getCurrentNivel(email).then(resultado=>{

      let actual=resultado[0].payload.val() as Usuarios;
      this.usuarioNivel = actual.nivel;
    })
  }
}
