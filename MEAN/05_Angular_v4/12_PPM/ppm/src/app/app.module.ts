import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PpmNavComponent } from './ppm-nav/ppm-nav.component';
import { PpmHomeComponent } from './ppm-home/ppm-home.component';
import { PpmViewListComponent } from './ppm-view-list/ppm-view-list.component';
import { PpmCreateComponent } from './ppm-create/ppm-create.component';
import { PpmEditComponent } from './ppm-edit/ppm-edit.component';

import { PpmProductsDataService } from './ppm-products-data.service';

@NgModule({
  declarations: [
    AppComponent,
    PpmNavComponent,
    PpmHomeComponent,
    PpmViewListComponent,
    PpmCreateComponent,
    PpmEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ PpmProductsDataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
