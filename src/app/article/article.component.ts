import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Article } from '../types/Article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnChanges {

  @Input() item: Article = <Article>{};

  @Output() delete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log('');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['item'].isFirstChange()) {
      console.log(changes['item'].previousValue, changes['item'].currentValue);
    }
  }

  doDelete() {
    this.delete.emit(this.item.id);
  }

}
