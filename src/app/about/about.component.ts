import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  images: any[];
  loaded: boolean;

  constructor() {
    this.loaded = false;
    this.images = [];
  }

  ngOnInit(): void {
    this.pload("assets/images/me.webp");
  }

  pload(...args: any[]):void {
    for (var i = 0; i < args.length; i++) {
      this.images.push(new Image());
      this.images[i].src = args[i];
    }
    this.loaded = true;
  }

}
