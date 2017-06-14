import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { PowerComponent } from './power/power.component';

@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    PowerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
