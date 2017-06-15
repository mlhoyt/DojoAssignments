import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherSeattleComponent } from './weather-seattle/weather-seattle.component';
import { WeatherSanjoseComponent } from './weather-sanjose/weather-sanjose.component';
import { WeatherDcComponent } from './weather-dc/weather-dc.component';
import { WeatherDallasComponent } from './weather-dallas/weather-dallas.component';
import { WeatherChicagoComponent } from './weather-chicago/weather-chicago.component';
import { WeatherBurbankComponent } from './weather-burbank/weather-burbank.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'seattle' },
  { path: 'seattle', component: WeatherSeattleComponent },
  { path: 'sanjose', component: WeatherSanjoseComponent },
  { path: 'dc', component: WeatherDcComponent },
  { path: 'dallas', component: WeatherDallasComponent },
  { path: 'chicago', component: WeatherChicagoComponent },
  { path: 'burbank', component: WeatherBurbankComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot( routes ) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}
