import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Player } from '../../player';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  @Input() player1: Player;
  @Input() player2: Player;

  constructor() { }

  ngOnInit() {
  }

}
