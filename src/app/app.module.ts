import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BlogModule } from './blog/blog.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { markedOptionsFactory } from './md-renderer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';
import { SpinnerModule } from './spinner/spinner.module';
import { httpInterceptorProviders } from './http-interceptors';
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    PortfolioItemComponent,
    PageNotFoundComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      loader: HttpClient,
      markedOptions: {
        provide: MarkedOptions,
        useFactory: markedOptionsFactory,
      }
    }),
    BlogModule,
    SpinnerModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: "BASE_URL", useValue: environment.baseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
