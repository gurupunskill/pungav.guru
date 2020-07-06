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

  private delay(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(()=>resolve(), ms));
  }

  constructor(private http: HttpClient) {
    this.loaded = false;
  }

  ngOnInit(): void {
    this.loaded=false;
    this.getPortfolio().subscribe(data => {
      this.categories = data.categories;
      this.portfolio = data;
      this.descriptions = {};
      this.categories.forEach((category: string | number) => {
        let categoryData = this.portfolio[category];
        let r_desc =[]
        categoryData.forEach((row: any[]) => {
          let c_desc = []
          row.forEach(item => {
            let desc: any;
            this.getMdFile("./assets/content/portfolio/"+item.description_file+".md").subscribe(
              file_data => {
                desc = file_data
                console.log(desc)
                c_desc.push(desc)
              }
            )
          });
          r_desc.push(c_desc);
        });
        this.descriptions[category] = r_desc;
      });
      this.loaded=true;
    })
  }

  private getPortfolio(): Observable<any> {
    return this.http.get("./assets/content/portfolio.json");
  }

  private getMdFile(filepath): Observable<any> {
    return this.http.get(filepath, {responseType: 'text'});
  }

}
