import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-weather-dallas',
  templateUrl: './weather-dallas.component.html',
  styleUrls: ['./weather-dallas.component.css']
})
export class WeatherDallasComponent implements OnInit {
  data = [];

  owapi_url = "http://api.openweathermap.org/data/2.5/weather";
  owapi_uid = "APPID=9e6717fb14947b2948cd7f033dacd57f";
  owapi_args = "q=dallas";

  constructor(
    private _httpService: HttpService
  )
  {}

  ngOnInit() {
    this._httpService.get( this.owapi_url + "?" + this.owapi_uid + "&" + this.owapi_args )
      .then( data => { this.data = data; } )
      .catch( err => { console.log( "Error: WeatherDallasComponent: HttpService.get:" + err ); } );
  }

  convertTempKToF( tempK ) {
    return ( 32 + ((tempK - 275) * 9/4) );
  }
}
