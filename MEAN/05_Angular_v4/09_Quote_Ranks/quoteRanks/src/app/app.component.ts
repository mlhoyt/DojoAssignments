import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [];

  title = 'app';

  storeNewQuote( eventData ) {
    this.quotes.push( { text: eventData.text, author: eventData.author, votes: 0 } );
    console.log( "Debug: AppComponent: storeNewQuote: quotes:", this.quotes ); // DEBUG
  }
}
