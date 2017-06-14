import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes;
  @Output() updateQuoteEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateQuote( id, action ) {
    this.updateQuoteEvent.emit( {id: id, action: action } );
  }
}
