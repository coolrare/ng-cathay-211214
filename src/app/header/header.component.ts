import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  sitename = 'Hello World';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
    }, 2000);
  }

  changeSitename(evt: MouseEvent) {
    console.log(evt);
    if (evt.ctrlKey) {
      this.sitename = 'The Will Will Web';
    }
  }

}
