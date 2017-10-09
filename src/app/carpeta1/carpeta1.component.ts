import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carpeta1',
  templateUrl: './carpeta1.component.html',
  styleUrls: ['./carpeta1.component.css']
})
export class Carpeta1Component implements OnInit {

  constructor() {
    // localStorage.setItem("Sesion", "Admin");
  }
  ngOnInit() {
  }
  CambiarSesion(tipo:string){
    console.log(tipo)
    localStorage.setItem("Sesion", tipo);
    location.reload();
  }
}
