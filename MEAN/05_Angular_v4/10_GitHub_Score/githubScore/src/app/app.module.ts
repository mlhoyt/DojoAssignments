import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GithubGetScoreComponent } from './github-get-score/github-get-score.component';
import { GithubShowScoreComponent } from './github-show-score/github-show-score.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubGetScoreComponent,
    GithubShowScoreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
