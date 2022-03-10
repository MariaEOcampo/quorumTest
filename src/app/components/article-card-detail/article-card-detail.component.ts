import { Component, Input, OnInit } from '@angular/core';
import { INew } from '../../models/newInterface';

@Component({
  selector: 'app-article-card-detail',
  templateUrl: './article-card-detail.component.html',
  styleUrls: ['./article-card-detail.component.scss'],
})
export class ArticleCardDetailComponent implements OnInit {
  @Input() article!: INew;

  constructor() {}

  ngOnInit(): void {}
}
