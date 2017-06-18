import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Player } from '../../../player';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() label;
  @Input() player: Player;
  @Output() get_user_event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClickGetUser() {
    this.get_user_event.emit( this.player );
  }
}
