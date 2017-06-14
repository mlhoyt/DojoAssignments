import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {
  @Output() newQuoteEvent = new EventEmitter();

  quote = { text: "", author: "" };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.newQuoteEvent.emit( this.quote ); // Store
    this.quote = { text: "", author: "" }; // Clear
  }
}
