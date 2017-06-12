import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';

  TZ_OFFSETS = {
    "PDT": -7,
    "MDT": -6,
    "CDT": -5,
    "EDT": -4,
  };
  TZ_KEYS = [ "PDT", "MDT", "CDT", "EDT" ];
  currentDateTime: Date = new Date();
  currentTZ: string = "PDT";

  updateByTZ( newTZ: string ): void {
    if( this.currentDateTime == null ) {
      this.currentDateTime = new Date();
      this.currentTZ = "PDT";
    }
    let adjustTZ = this.TZ_OFFSETS[ newTZ ] - this.TZ_OFFSETS[ this.currentTZ ];
    this.currentDateTime = new Date( this.currentDateTime.getTime() + (adjustTZ * 60 * 60 * 1000) );
    this.currentTZ = newTZ;
  }

  clearDTAndTZ(): void {
    this.currentDateTime = null;
    this.currentTZ = null;
  }
}
