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
    this.storeNewQuote({
      text: "I never am really satisfied that I understand anything, because, understand it well as I may, my comprehension can only be an infinitesimal fraction of all I want to understand about the many connections and relations which occur to me.",
      author: "Ada Lovelace",
      votes: 27,
    });
    this.storeNewQuote({
      text: "To be, or not to be",
      author: "Prince Hamlet",
      votes: 25,
    });
    this.storeNewQuote({
      text: "There are risks and costs to action.  But they are far less than the long range risks of comfortable inaction.",
      author: "John F. Kennedy",
      votes: 7,
    });
  }

  storeNewQuote( eventData ) {
    this.quotes.push({
      id: ++this.quote_id,
      text: eventData.text,
      author: eventData.author,
      votes: eventData.votes || 0
    });
  }
}
