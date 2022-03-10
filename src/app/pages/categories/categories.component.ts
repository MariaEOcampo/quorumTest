import { Component, OnInit } from '@angular/core';
import { ICategoryToShow } from 'src/app/models/categoryToShow';
import { INew } from 'src/app/models/newInterface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  newsCategory: INew[] = [];
  listOfCategories: string[] = [];
  categoryToShow: ICategoryToShow[] = [];
  newCategoryUrl: any = {
    fashion: 'http://placeimg.com/600/300/fashion',
    car: 'http://placeimg.com/600/300/car',
    science: 'http://placeimg.com/600/300/science',
    technology: 'http://placeimg.com/600/300/technology',
    entertainment: 'http://placeimg.com/600/300/entertainment',
    environment: 'http://placeimg.com/600/300/entertainment',
    finances: 'http://placeimg.com/600/300/finances',
    travel: 'http://placeimg.com/600/300/travel',
  };

  constructor(private dataService: NewsService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe((news) => this.reduceCategory(news));
  }

  reduceCategory(categories: any) {
    const list = categories.reduce((accumulator: any, item: INew) => {
      const name = item.category;
      const prevItems = accumulator[name] || [];
      return {
        ...accumulator,
        [name]: [...prevItems, item],
      };
    }, {});
    this.listOfCategories = this.reduceNameOfCategories(list);
  }

  reduceNameOfCategories(arrayCategories: any) {
    const names = Object.keys(arrayCategories);
    return names;
  }
}
