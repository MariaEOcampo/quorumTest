import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { INew } from '../models/newInterface';


@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  BaseUrl =
    '/interview-498d3.appspot.com/o/news.json?alt=media&token=63f227b0-7774-4016-b7fe-42507315ac9e';

  getData(): Observable<INew[]> {
    return this.http
      .get(this.BaseUrl)
      .pipe(map((data: any) => Object.keys(data).map((k) => data[k])))
      ;
  }
}


