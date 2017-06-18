import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Player } from '../../player';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  @Input() player1: Player;
  @Input() player2: Player;
  @Output() get_user_event = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get_user( player ) {
    this.get_user_event.emit( player );
  }
}
