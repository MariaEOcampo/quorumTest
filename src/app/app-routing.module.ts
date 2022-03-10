import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './pages/article/article.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { RecentComponent } from './pages/recent/recent.component';
import { TopViewsComponent } from './pages/top-views/top-views.component';

const routes: Routes = [
  {
    path: 'recent',
    component: RecentComponent,
    pathMatch: 'full',
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'toprated',
    component: TopViewsComponent,
  },
  {
    path: 'article/:id',
    component: ArticleComponent,
  },
  {
    path: '**',
   redirectTo:'recent',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModuleModule { }
