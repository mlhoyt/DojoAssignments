import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Player } from '../../../player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() label;
  @Input() player: Player;

  constructor() { }

  ngOnInit() {
  }

}
