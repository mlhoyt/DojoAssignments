import { Component, OnInit } from '@angular/core';
import { Player } from '../../player';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {
  player1: Player = new Player();
  player2: Player = new Player();

  constructor() { }

  ngOnInit() {
  }

}
