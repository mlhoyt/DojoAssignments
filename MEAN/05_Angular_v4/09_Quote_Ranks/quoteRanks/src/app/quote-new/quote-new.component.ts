import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {
  quote = { text: "", author: "" };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log( "Debug: QuoteNewComponent: onSubmit: ..." );
    console.log( this.quote );
  }
}
