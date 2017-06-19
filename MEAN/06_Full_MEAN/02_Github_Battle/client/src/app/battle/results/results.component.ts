import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Player } from '../../player';
import { Player1DataService } from '../../player1-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  player1: Player;
  @Input() player2: Player;

  p1subscription: Subscription;

  constructor(
    private _player1DataService: Player1DataService,
  )
  {
    this.p1subscription = this._player1DataService.subject
      .subscribe( data => { this.player1 = data; }, err => {}, () => {} );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.p1subscription.unsubscribe();
  }

}
