import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Player } from '../../player';
import { Player1DataService } from '../../player1-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, OnDestroy {
  player1: Player;
  @Input() player2: Player;
  @Output() get_user_event = new EventEmitter();

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

  get_user( player ) {
    this.get_user_event.emit( player );
  }
}
