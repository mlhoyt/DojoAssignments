import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Player } from '../../player';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit {
  @Input() all_players: Array<Player>;

  constructor() { }

  ngOnInit() {
  }

}
