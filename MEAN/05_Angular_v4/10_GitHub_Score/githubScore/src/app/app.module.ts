import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GithubGetScoreComponent } from './github-get-score/github-get-score.component';
import { GithubShowScoreComponent } from './github-show-score/github-show-score.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    GithubGetScoreComponent,
    GithubShowScoreComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
