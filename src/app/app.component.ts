import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from './types/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-cathay-211214';
  keyword = '123'

  data: Article[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Article[]>('/api/articles.json').subscribe(data => {
      this.data = data;
    });
  }

  clearKeyword() {
    this.keyword = '';
  }

  searchKeyword(text: string) {
    this.keyword = text;
  }
}
