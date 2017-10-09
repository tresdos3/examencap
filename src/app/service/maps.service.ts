import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class MapsService {

  coordenadas: FirebaseListObservable<any>;
  constructor(private db: AngularFireDatabase) {
    this.coordenadas = db.list('/mapa')
  }
  RegistrarCoordenadas(latitud: number, longitud: number) {
    this.db.object('mapa/').set({
      latitud: latitud,
      longitud: longitud
    });
  }
  ListarCoordenadas() {
    return this.coordenadas;
  }
  DatosCoordenadas = [
    { "lat": -21.508857006550688 , "lng": -64.74573612213135 },
    { "lat": -21.512091038006517 , "lng": -64.741530418396 },
    { "lat": -21.51137237056714  , "lng": -64.74547863006592 },
    { "lat": -21.50941598009318 , "lng": -64.74225997924805 },
    { "lat": -21.50666101825707  , "lng": -64.73912715911865 },
    { "lat": -21.510254436377277  , "lng": -64.74028587341309 },
    { "lat": -21.511052961675855 , "lng": -64.74470615386963 },
    { "lat": -21.50670094561298 , "lng": -64.74088668823242 },
  ];
}
