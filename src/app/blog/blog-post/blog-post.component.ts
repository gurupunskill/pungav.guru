import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  postID: string;
  post_filepath: string;

  constructor(private route: ActivatedRoute) {
    this.postID = this.route.snapshot.paramMap.get("postID")
    this.post_filepath = "assets/content/blog/" + this.postID + ".md";
  }

  ngOnInit(): void {
  }

}
