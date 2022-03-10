import { Component, OnInit } from '@angular/core';
import { INew } from 'src/app/models/newInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-top-views',
  templateUrl: './top-views.component.html',
  styleUrls: ['./top-views.component.scss'],
})
export class TopViewsComponent implements OnInit {
  public topNews: INew[] = [];
  public newsByViews: INew[] = [];

  constructor(private dataService: NewsService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((news) => (this.topNews = news));
  }

  ngAfterContentChecked(): void {
    this.newsByViews = this.orderByDate(this.topNews).slice(0, 20);
  }

  orderByDate(news: any) {
    news = this.topNews
      .filter((newData) => newData.views)
      .sort(
        (date1, date2) =>date2.views -date1.views);
    return news;
  }
}
