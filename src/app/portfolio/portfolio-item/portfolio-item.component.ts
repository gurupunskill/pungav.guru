import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  @Input() title: string;
  @Input() subtitle: string;
  @Input() description: string;
  @Input() fontColor?: string;
  @Input() bgColor?: string;
  @Input() bgImage?: string;
  style: any;

  constructor() {
  }

  ngOnInit(): void {
    this.style = {};
    if(this.bgColor) {
      // box-shadow: inset 0 0 0 1000px rgba(0,0,0,0.4)
      // this.style['background-color'] = this.bgColor;
      this.style['box-shadow'] = `inset 0 0 0 1000px ${this.bgColor}`;
    }
    if(this.bgImage) {
      this.style['background-image'] = `url(assets/images/portfolio/${this.bgImage}`
    }
    if(this.fontColor) {
      this.style['color'] = this.fontColor;
    }

    // this.description_file = "assets/content/portfolio/"+this.description_file+".md";
  }

}
