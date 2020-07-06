import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { SpinnerModule } from '../spinner/spinner.module';

@NgModule({
  declarations: [
    BlogComponent,
    BlogPostComponent,
    BlogIndexComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    SpinnerModule,
    MarkdownModule.forChild()
  ]
})
export class BlogModule { }