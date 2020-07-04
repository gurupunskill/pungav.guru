import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogIndexComponent } from './blog-index/blog-index.component';

const routes: Routes = [
  {
    path: '', component: BlogComponent,
    children: [
      { 
        path:'post/:postID',
        component: BlogPostComponent
      },
      { 
        path:'index',
        component: BlogIndexComponent
      },
      { path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
