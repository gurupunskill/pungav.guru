import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: any;
  categories: any;
  descriptions: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { portfolioData }) => {
      this.portfolio = data.portfolioData["portfolio"]
      this.categories = data.portfolioData["categories"]
      this.descriptions = data.portfolioData["descriptions"]
    });
  }
}
