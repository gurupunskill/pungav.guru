import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  postID: string;
  post_filepath: string;
  post_data: string;
  loaded: boolean;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.postID = this.route.snapshot.paramMap.get("postID")
    this.post_filepath = "assets/content/blog/" + this.postID + ".md";
    this.loaded = false;
  }

  ngOnInit(): void {
    this.getMdFile(this.post_filepath).subscribe(
      file_data => {
        this.post_data = file_data;
        this.loaded = true;
      }
    )
  }

  private getMdFile(filepath): Observable<any> {
    return this.http.get(filepath, {responseType: 'text'});
  }

}
