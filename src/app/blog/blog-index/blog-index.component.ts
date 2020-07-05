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

  constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute) {
    this.parsedDates = [];
    this.postStyles = [];

    this.getBlogIndex().subscribe(data => {
      this.blogIndex = data;
      this.blogIndex.posts.forEach(post => {
        let date = new Date(post.date)
        this.parsedDates.push(date.toLocaleDateString('en-IN', dateOptions))
        let postStyle = {}
        if (post.cover_image) {
            postStyle['background-image'] = `url(assets/images/blog/cover-images/${post.cover_image}`
        }
        if (post.cover_color) {
          postStyle['background-color'] = post.cover_color
          postStyle['box-shadow'] = `inset 0 0 0 0 rgba(0,0,0,0.6)`
        }
        this.postStyles.push(postStyle);
      });
    });
  }

  ngOnInit(): void {
  }

  private getBlogIndex(): Observable<any> {
    return this.http.get("./assets/content/blog-index.json");
  }

  gotoPost(postID:string) {
    this.router.navigate(["/blog/post", postID]);
  }

}
