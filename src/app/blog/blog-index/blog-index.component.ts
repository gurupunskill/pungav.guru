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
  coverImagePaths: string[];

  constructor(private http: HttpClient, private router: Router, private route:ActivatedRoute) {
    this.parsedDates = [];
    this.coverImagePaths = [];
    this.getBlogIndex().subscribe(data => {
      this.blogIndex = data;
      this.blogIndex.posts.forEach(post => {
        let date = new Date(post.date)
        this.parsedDates.push(date.toLocaleDateString('en-IN', dateOptions))
        if(post.cover_image) {
          this.coverImagePaths.push('assets/images/blog/cover-images/'+post.cover_image)
        } else {
          this.coverImagePaths.push('')
        }
      });
    });
  }

  ngOnInit(): void {
  }

  private getBlogIndex(): Observable<any> {
    return this.http.get("./assets/content/index.json");
  }

  gotoPost(postID:string) {
    this.router.navigate(["/blog/post", postID]);
  }

}
