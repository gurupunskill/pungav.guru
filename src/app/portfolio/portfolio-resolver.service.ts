import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioResolverService implements Resolve<any> {

  constructor(private router: Router, private http: HttpClient) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return new Promise((res) => {
      this.http.get("./assets/content/portfolio.json").subscribe(data => {
        let categories = data['categories'];
        let portfolio = data;
        let images = [];
        let descriptions = {};
        let description_promises = {};
        categories.forEach((category: string | number) => {
          let categoryData = portfolio[category];
          categoryData.forEach((item) => {
            if(item.bgImage){
              images.push(`assets/images/portfolio/${item.bgImage}`)
            }
            description_promises[item.description_file] = this.getMdFile("./assets/content/portfolio/"+item.description_file+".md");
          });
        });
  
        forkJoin(description_promises).subscribe((value) => {
          descriptions = value;
          res({
            "categories": categories,
            "portfolio": portfolio,
            "images": images,
            "descriptions": descriptions
          })
        })
      })
    })
  }

  private getMdFile(filepath): Observable<any> {
    return this.http.get(filepath, {responseType: 'text'});
  }
}
