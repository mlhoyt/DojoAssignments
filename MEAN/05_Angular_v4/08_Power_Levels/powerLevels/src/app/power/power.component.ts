import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent implements OnInit {
  powerLevelSelect: number = 0;
  powerLevel: number = 0;
  POWER_LEVELS: Array<number> = [];

  constructor() {
    for( let i = 1; i <= 100; ++i ) {
      this.POWER_LEVELS.push( i );
    }
  }

  ngOnInit() {
  }

  onSubmit() {
    this.powerLevel = this.powerLevelSelect;
  }
}
