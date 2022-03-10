import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss'],
})
export class CardCategoryComponent implements OnInit {
  @Input() name!: string;
  @Input() url!: string;
  public colorCategory!: string;
  public colors: any = {
    fashion: '#533E85',
    car: '#488FB1',
    science: '#03045E',
    technology: '#085E7D',
    entertainment: '#874356',
    environment: '#6EBF8B',
    finances: '#F76E11',
    travel:'#6e0439',
  };

  constructor() {}

  ngOnInit(): void {
    this.colorsToShow(this.name);
  }

  colorsToShow(category: any) {
    this.name = category;
    let color;
    color = this.colors[category];
    this.colorCategory = color;
    return this.colorCategory;
  }
}
