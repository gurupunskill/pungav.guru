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
  descriptions: any;
  loaded: boolean;
  images: string[];
  imgLoadedCounter: number;

  private delay(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

  constructor(private http: HttpClient) {
    this.loaded = false;
    this.images = [];
    this.imgLoadedCounter = 0;
  }

  ngOnInit(): void {
    this.getPortfolio().subscribe(data => {
      this.categories = data.categories;
      this.portfolio = data;
      this.descriptions = {};
      this.categories.forEach((category: string | number) => {
        let categoryData = this.portfolio[category];
        categoryData.forEach((item) => {
          if(item.bgImage){
            this.images.push(`assets/images/portfolio/${item.bgImage}`)
          }
          this.getMdFile("./assets/content/portfolio/"+item.description_file+".md").subscribe(
            file_data => {
              this.descriptions[item.description_file] = file_data
            }
          )
        });
      });
      // this.loaded=true;
    })
  }

  private getPortfolio(): Observable<any> {
    return this.http.get("./assets/content/portfolio.json");
  }

  private getMdFile(filepath): Observable<any> {
    return this.http.get(filepath, {responseType: 'text'});
  }

  imgLoaded() {
    this.imgLoadedCounter += 1;
    this.loaded = (this.imgLoadedCounter >= this.images.length);
  }

}
