import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteNewComponent } from './quote-new/quote-new.component';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteNewComponent,
    QuoteListComponent,
    QuoteItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
