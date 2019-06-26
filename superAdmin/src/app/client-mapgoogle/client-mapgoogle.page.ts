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

@Component({
  selector: 'app-client-mapgoogle',
  templateUrl: './client-mapgoogle.page.html',
  styleUrls: ['./client-mapgoogle.page.scss'],
})
export class ClientMapgooglePage implements OnInit {
  map:GoogleMap;
  constructor() { } 

  ngOnInit(){
    this.loadMap();
  }

  loadMap(){
    LocationService.getMyLocation().then((mylocation:MyLocation)=>{
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
      this.map = GoogleMaps.create('map_canvas', options);

      let marker: Marker = this.map.addMarkerSync({
        title: 'Ionic',
        icon: 'blue',
        animation: 'DROP',
        position: {
          lat: 43.0741904,
          lng: -89.3809802
        }
      });
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        alert('clicked');
      });

    })
   
    
  }


}
