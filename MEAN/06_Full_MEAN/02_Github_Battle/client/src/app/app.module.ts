import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PlayerApiService } from './player-api.service';
import { GithubApiService } from './github-api.service';
import { BattleComponent } from './battle/battle.component';

@NgModule({
  declarations: [
    AppComponent,
    BattleComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
  ],
  providers: [ PlayerApiService, GithubApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
