import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PlayerApiService } from './player-api.service';
import { GithubApiService } from './github-api.service';
import { BattleComponent } from './battle/battle.component';
import { SelectComponent } from './battle/select/select.component';
import { PlayerComponent } from './battle/select/player/player.component';
import { ResultsComponent } from './battle/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    SelectComponent,
    PlayerComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [ PlayerApiService, GithubApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
