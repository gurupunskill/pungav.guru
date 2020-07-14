import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

@Component({
  selector: 'app-blog-index',
  templateUrl: './blog-index.component.html',
  styleUrls: ['./blog-index.component.scss']
})
export class BlogIndexComponent implements OnInit {
  blogIndex: any;
  parsedDates: string[];
  postStyles: any[];
  postImages: string[];
  loaded: boolean;
  images: any[];
  imgLoadedCounter: number;

  constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute) {
    this.parsedDates = [];
    this.postStyles = [];
    this.imgLoadedCounter = 0;
    this.loaded = false;
  }

  ngOnInit(): void {
    this.loaded = false;
    this.getBlogIndex().subscribe(data => {
      this.blogIndex = data;
      this.postImages = [];
      this.blogIndex.posts.forEach(post => {
        let date = new Date(post.date)
        this.parsedDates.push(date.toLocaleDateString('en-IN', dateOptions))
        let postStyle = {}
        if(post.bgImage) {
            postStyle['background-image'] = `url(assets/images/blog/cover-images/${post.bgImage}`
            this.postImages.push(`assets/images/blog/cover-images/${post.bgImage}`)
        }
        if(post.bgColor) {
          postStyle['box-shadow'] = `inset 0 0 0 1000px ${post.bgColor}`;
        }
        if(post.color) {
          postStyle['color'] = `${post.color}`;
        }
        this.postStyles.push(postStyle);
      });
    });
  }
  

  private getBlogIndex(): Observable<any> {
    return this.http.get("./assets/content/blog-index.json");
  }

  gotoPost(postID:string) {
    this.router.navigate(["/blog/post", postID]);
  }

  imgLoaded() {
    this.imgLoadedCounter += 1;
    this.loaded = (this.imgLoadedCounter >= this.postImages.length);
  }

}
