import { Component, OnInit } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  LocationService,
  MyLocation,
  GoogleMapsMapTypeId
} from '@ionic-native/google-maps';
import { Negocio } from '../interface/negocio';
import { NegociosService } from '../services/negocios.service';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-client-mapgoogle',
  templateUrl: './client-mapgoogle.page.html',
  styleUrls: ['./client-mapgoogle.page.scss'],
})
export class ClientMapgooglePage implements OnInit {
  map:GoogleMap;
  negocios:Negocio[]=[];
  constructor(
  private negocioService:NegociosService
        ) { 
            this.obtenerNegociosFirebase();
            
          } 

  ngOnInit(){
    this.loadMap();
  }

  async obtenerNegociosFirebase(){
   
    this.negocioService.listar().subscribe(async (resultado) => {
     this.negocios = await resultado;
      this.negocios.forEach(element => {
        this.agregarMarkers(element)
      });
      
    });


  }

 async loadMap(){
    LocationService.getMyLocation().then(async (mylocation:MyLocation)=>{
      let options: GoogleMapOptions = {
        mapType: GoogleMapsMapTypeId.TERRAIN,
        camera:{
          target:mylocation.latLng,
          zoom:14
        },
        controls: {
          compass: true,
          myLocation: true,
          myLocationButton: true,
          mapToolbar: true,
          indoorPicker: true,
          zoom: true,  
        }
      };
       this.map = await GoogleMaps.create('map_canvas', options);

      this.obtenerNegociosFirebase();    

    })
   
    
  }

  agregarMarkers(marker:Negocio){
    let newmarker:Marker= this.map.addMarkerSync({
      title: marker.nombre,
      icon: 'blue',
      animation: 'DROP',
      position: {
        lat: marker.latitud,
        lng: marker.longitud
      },
      styles: {
        'text-align': 'center',
        'font-style': 'italic',
        'font-weight': 'bold',
        'color': 'red'
      },
      snippet: 'descripcion del negocio',
      draggable: false,
      disableAutoPan: true
    });
    newmarker.showInfoWindow();
//MARKER_CLICK
    newmarker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('clicked');

    });
  }

  


}
