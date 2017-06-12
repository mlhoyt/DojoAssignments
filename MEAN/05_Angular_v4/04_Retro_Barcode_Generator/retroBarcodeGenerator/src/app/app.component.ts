import { Component } from '@angular/core';

function getRandomRGBColor(): string {
  let r_val = Math.floor( Math.random() * 256 );
  let g_val = Math.floor( Math.random() * 256 );
  let b_val = Math.floor( Math.random() * 256 );
  return( "rgb(" + String( r_val ) + "," + String( g_val ) + "," + String( b_val ) + ")" );
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode Generator';
  elements: Array<string> = [
    getRandomRGBColor(),
    getRandomRGBColor(),
    getRandomRGBColor(),
    getRandomRGBColor(),
    getRandomRGBColor(),
    getRandomRGBColor(),
    getRandomRGBColor(),
    getRandomRGBColor(),
    getRandomRGBColor(),
    getRandomRGBColor(),
  ];
}
