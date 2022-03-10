import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutingModuleModule } from './app-routing.module';

import { RecentComponent } from './pages/recent/recent.component';
import { ArticleComponent } from './pages/article/article.component';
import { CardCategoryComponent } from './components/card-category/card-category.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CardNewsComponent } from './components/card-news/card-news.component';
import { TopViewsComponent } from './pages/top-views/top-views.component';
import { ArticleCardDetailComponent } from './components/article-card-detail/article-card-detail.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent, 
    RecentComponent,
    ArticleComponent,
    CardCategoryComponent,
    NavbarComponent,
    CategoriesComponent,
    CardNewsComponent,
    TopViewsComponent,
    ArticleCardDetailComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModuleModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
