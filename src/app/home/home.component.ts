import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  tipo;
  EsAdmin;
  constructor() {
    this.tipo = localStorage.getItem("Sesion");
  }

  ngOnInit() {
    if (localStorage.getItem("Sesion") === "Admin") {
      this.EsAdmin = true;
      console.log(this.EsAdmin)
    }
    else {
      this.EsAdmin = false;
      console.log(this.EsAdmin)
    }
  }

}
