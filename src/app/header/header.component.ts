import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';
  counter = 0;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
    }, 2000);
  }

  changeSitename(evt: MouseEvent) {
    console.log(evt);
    this.counter++;
    if (evt.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

  caculateFontSize() {
    return this.counter + 12;
  }

}
