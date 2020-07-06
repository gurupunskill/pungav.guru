import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  images: any[];
  loaded: boolean;
  imgLoadedCounter: number;

  constructor() {
    this.loaded = false;
    this.imgLoadedCounter = 0;
    this.images = ["assets/images/me.webp"];
  }

  imgLoaded() {
    this.imgLoadedCounter += 1;
    this.loaded = (this.imgLoadedCounter >= this.images.length);
  }

  ngOnInit(): void {}

}
