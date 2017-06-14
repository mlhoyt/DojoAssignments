import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score: number = null;

  updateScore( eventData ) {
    this.score = eventData.score;
    console.log( "Debug: AppComponent: updateScore: score:", this.score );
  }
}
