import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-weather-seattle',
  templateUrl: './weather-seattle.component.html',
  styleUrls: ['./weather-seattle.component.css']
})
export class WeatherSeattleComponent implements OnInit {

  constructor(
    private _httpService: HttpService
  )
  {}

  ngOnInit() {
  }

}
