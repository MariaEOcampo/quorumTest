import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { find, filter } from 'rxjs/operators';
import { INew } from 'src/app/models/newInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  articles: INew[] = [];
  article!: any;
  id!: any;
  loading:boolean=true;

  constructor(
    private route: ActivatedRoute,
    private serviceNews: NewsService
  ) {}

  ngOnInit(): void {
    this.loading=true;
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap;
      this.id = params.id;
    });
     this.serviceNews.getData().subscribe((data) => (this.articles = data));
  }
  ngAfterContentChecked(): void {
  this.findArticle();
 
  }

  findArticle() {
    const newArticle = this.articles.find((article) => article.id === this.id);
    this.article=newArticle
      this.loading = false;  
  }
}
