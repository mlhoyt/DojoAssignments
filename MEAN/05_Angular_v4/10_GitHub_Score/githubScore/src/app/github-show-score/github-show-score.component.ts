import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-github-show-score',
  templateUrl: './github-show-score.component.html',
  styleUrls: ['./github-show-score.component.css']
})
export class GithubShowScoreComponent {
  @Input() score;

  main_message: string = "";
  sub_message: string = "";
  sub_color: string = "black";

  constructor() { }

  ngOnChanges() {
    if( this.score === null ) {
      this.main_message = "";
      this.sub_message = "";
      this.sub_color = "black";
    }
    else if( this.score < 0 ) {
      this.main_message = "Not a Github User!"
      this.sub_message = "";
      this.sub_color = "black";
    }
    else {
      this.main_message = "Your score: " + this.score;
      if( this.score < 20 ) {
        this.sub_message = "Needs work!";
        this.sub_color = "red";
      }
      else if( this.score < 50 ) {
        this.sub_message = "A decent start!";
        this.sub_color = "orange";
      }
      else if( this.score < 100 ) {
        this.sub_message = "Doing good!";
        this.sub_color = "black";
      }
      else if( this.score < 200 ) {
        this.sub_message = "Great job!";
        this.sub_color = "green";
      }
      else {
        this.sub_message = "Github Elite!";
        this.sub_color = "blue";
      }
    }
  }
}
