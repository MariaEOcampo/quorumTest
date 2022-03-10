import { Component, OnInit } from '@angular/core';
import { INew } from 'src/app/models/newInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss'],
})
export class RecentComponent implements OnInit {
  public recentNews: INew[] = [];
  public newsByDate: INew[] = [];

  constructor(private dataService: NewsService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((news) =>this.recentNews=news);
   
  }

ngAfterContentChecked(): void {
this.newsByDate = this.orderByDate(this.recentNews).slice(0,20);
}

  orderByDate(news:any) {
    news = this.recentNews
      .filter((newData) => newData.createdAt)
      .sort(
        (date1, date2) =>
          new Date(date2.createdAt).getTime() -
          new Date(date1.createdAt).getTime()
      );
      return news
  }
}
