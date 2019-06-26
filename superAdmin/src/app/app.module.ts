import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

// MODULOS PARA GOOGLE MAPS
import {GoogleMaps} from '@ionic-native/google-maps';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabase } from '@angular/fire/database';
import { ClienteDetallesNegocioPageModule } from './cliente-detalles-negocio/cliente-detalles-negocio.module';
import { ClientMapgooglePageModule } from './client-mapgoogle/client-mapgoogle.module';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBLJBVtNqPx6EC0jPOhTXxzAortkXaDBk8",
    authDomain: "tecnologiasinternet-745d3.firebaseapp.com",
    databaseURL: "https://tecnologiasinternet-745d3.firebaseio.com",
    projectId: "tecnologiasinternet-745d3",
    storageBucket: "tecnologiasinternet-745d3.appspot.com",
    messagingSenderId: "596202129245",
    appId: "1:596202129245:web:1aeba3b44305d5e1"
  }
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    IonicModule.forRoot(),
    AppRoutingModule,
    
  ],
  providers: [
    StatusBar,
    AngularFireDatabase,
    SplashScreen,
    AngularFireDatabase,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    GoogleMaps
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
