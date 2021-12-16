import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, of, shareReplay } from 'rxjs';
import { DataService } from './data.service';
import { Article } from './types/Article';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng-cathay-211214';
  keyword = '123'

  data$: Observable<Article[]> = of([]);

  constructor(private datasvc: DataService) { }

  ngOnInit(): void {
    this.data$ = this.datasvc.loadArticles().pipe(
      shareReplay(1)
    );
  }

  clearKeyword() {
    this.keyword = '';
  }

  searchKeyword(text: string) {
    this.keyword = text;
    this.data$ = this.datasvc.loadArticles(text);
  }

  deleteArticle(id: number) {
    console.log('您剛剛刪除了編號 ' + id + ' 的文章');
  }
}
