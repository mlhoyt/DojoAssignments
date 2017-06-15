import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherNavComponent } from './weather-nav/weather-nav.component';
import { WeatherSeattleComponent } from './weather-seattle/weather-seattle.component';
import { WeatherSanjoseComponent } from './weather-sanjose/weather-sanjose.component';
import { WeatherBurbankComponent } from './weather-burbank/weather-burbank.component';
import { WeatherDallasComponent } from './weather-dallas/weather-dallas.component';
import { WeatherDcComponent } from './weather-dc/weather-dc.component';
import { WeatherChicagoComponent } from './weather-chicago/weather-chicago.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherNavComponent,
    WeatherSeattleComponent,
    WeatherSanjoseComponent,
    WeatherBurbankComponent,
    WeatherDallasComponent,
    WeatherDcComponent,
    WeatherChicagoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [ HttpService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
