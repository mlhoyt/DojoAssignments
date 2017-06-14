import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quote_id: number = 0;
  quotes = [];

  title = 'app';

  constructor() {
    this.createQuote({
      text: "I never am really satisfied that I understand anything, because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me.",
      author: "Ada Lovelace",
      votes: 27,
    });
    this.createQuote({
      text: "To be, or not to be",
      author: "Prince Hamlet",
      votes: 25,
    });
    this.createQuote({
      text: "There are risks and costs to action.  But they are far less than the long range risks of comfortable inaction.",
      author: "John F. Kennedy",
      votes: 7,
    });
  }

  createQuote( eventData ) {
    this.quotes.push({
      id: ++this.quote_id,
      text: eventData.text,
      author: eventData.author,
      votes: eventData.votes || 0
    });
  }

  updateQuote( eventData ) {
    for( let i = 0; i < this.quotes.length; ++i ) {
      let quote = this.quotes[ i ];
      if( quote.id === eventData.id ) {
        if( eventData.action === 1 ) {
          quote.votes++;
        }
        else if( eventData.action === 2 ) {
          quote.votes--;
        }
        else if( eventData.action === 3 ) {
          this.quotes.splice( i, 1 );
        }

        // Sort descending by votes count
        this.quotes.sort( ( a, b ) => b.votes - a.votes );

        break;
      }
    }
  }
}
