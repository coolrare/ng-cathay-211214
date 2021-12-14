import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-cathay-211214';
  keyword = '123'

  clearKeyword() {
    this.keyword = '';
  }

  searchKeyword(text: string) {
    this.keyword = text;
  }
}
