import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carpeta9',
  templateUrl: './carpeta9.component.html',
  styleUrls: ['./carpeta9.component.css']
})
export class Carpeta9Component implements OnInit {

  defaultImage = './assets/img/hold.jpg';
  image = './assets/img/keep.jpg';
  offset = 100;
  constructor() { }

  ngOnInit() {
  }

}
