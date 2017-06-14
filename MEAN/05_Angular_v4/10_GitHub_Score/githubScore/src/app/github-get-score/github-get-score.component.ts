import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-get-score',
  templateUrl: './github-get-score.component.html',
  styleUrls: ['./github-get-score.component.css']
})
export class GithubGetScoreComponent implements OnInit {
  @Output() newScoreEvent = new EventEmitter();

  username: string = "";

  constructor(
    private _httpService: HttpService
  )
  {}

  ngOnInit() {
  }

  onSubmit() {
    this._httpService.getData( "https://api.github.com/users/" + this.username )
      .then( data => { this.newScoreEvent.emit( { score: data.followers + data.public_repos } ); })
      .catch( err => { console.log( err ); } );
  }
}
