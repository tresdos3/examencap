import { Component, OnInit, ElementRef, ViewChild, NgZone } from '@angular/core';
import { FirebaseListObservable } from "angularfire2/database";
import { FormControl } from '@angular/forms';
import { MapsService } from "../service/maps.service";
import { MapsAPILoader } from "@agm/core";
import { } from 'googlemaps';

@Component({
  selector: 'app-carpeta7',
  templateUrl: './carpeta7.component.html',
  styleUrls: ['./carpeta7.component.css']
})
export class Carpeta7Component implements OnInit {

  coordenadas: FirebaseListObservable<any[]>;
  DatosCoordenadas = [];
  searchControl: FormControl;
  lat: number;
  lng: number;
  zoom: number = 14;
  @ViewChild("search")
  public searchElementRef: ElementRef;
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private Conex_Firebase: MapsService) {
    // console.log(Conex_Firebase.userTestStatus);
    // this.getLocation();
    // Conex_Firebase.RegistrarCoordenadas(JSON.parse(localStorage.getItem('lat')), JSON.parse(localStorage.getItem('lng')));
    this.coordenadas = Conex_Firebase.ListarCoordenadas();
    this.coordenadas.subscribe(aaa => {
      this.lat = aaa[0].$value;
      this.lng = aaa[1].$value;
    })
    this.DatosCoordenadas = Conex_Firebase.DatosCoordenadas;
    console.log(this.DatosCoordenadas);
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.Conex_Firebase.RegistrarCoordenadas(this.lat, this.lng);
          localStorage.setItem('lat', JSON.stringify(place.geometry.location.lat()))
          localStorage.setItem('lng', JSON.stringify(place.geometry.location.lng()))

        });
      });
    });
  }
  placeMarker($event) {
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
    console.log("Latitud: "+ this.lat + " Longitud: "+ this.lng)
    this.Conex_Firebase.RegistrarCoordenadas(this.lat, this.lng);
    localStorage.setItem('lat', JSON.stringify($event.coords.lat))
    localStorage.setItem('lng', JSON.stringify($event.coords.lng))
  }

}
