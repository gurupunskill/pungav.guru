import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() description_file: string;
  @Input() fontColor?: string;
  @Input() bgColor?: string;
  @Input() bgImage?: string;
  style: any;

  constructor() {
  }

  ngOnInit(): void {
    this.style = {};
    if(this.bgColor) {
      this.style['background-color'] = this.bgColor;
    }
    if(this.bgImage) {
      this.style['background-image'] = this.bgImage;
    }
    if(this.fontColor) {
      this.style['color'] = this.fontColor;
    }

    this.description_file = "assets/content/portfolio/"+this.description_file+".md";
  }

}
