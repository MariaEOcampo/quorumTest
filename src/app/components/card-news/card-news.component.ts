import { Component, Input, OnInit } from '@angular/core';
import { INew } from 'src/app/models/newInterface';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss'],
})
export class CardNewsComponent implements OnInit {
  @Input() title!: string;
  @Input() category!: string;
  @Input() url!: string;
  @Input() date!: string;
  @Input() id: string = '';
  @Input() views!: number;

  public colorCategory!: string;

  public colors: any = {
    fashion: '#533E85',
    car: '#488FB1',
    science: '#03045E',
    technology: '#085E7D',
    entertainment: '#874356',
    environment: '#6EBF8B',
    finances: '#F76E11',
    travel: '#6e0439',
  };

  constructor() {}

  ngOnInit(): void {
    this.colorsToShow(this.category);
  }

  colorsToShow(category: any) {
    this.category = category;
    let color;
    color = this.colors[category];
    this.colorCategory = color;
    return this.colorCategory;
  }
}
