import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  portfolio: any;
  categories: any;

  constructor(private http: HttpClient) {
    this.getPortfolio().subscribe(data => {
      this.categories = data.categories;
      this.portfolio = data;
    })
  }

  ngOnInit(): void {
  }

  private getPortfolio(): Observable<any> {
    return this.http.get("./assets/content/portfolio.json");
  }

}
