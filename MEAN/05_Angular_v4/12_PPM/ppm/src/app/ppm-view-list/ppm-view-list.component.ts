import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PpmProductsDataService } from '../ppm-products-data.service';
import { Subscription } from 'rxjs/Subscription';
import { ProductsData } from '../products-data';

@Component({
  selector: 'app-ppm-view-list',
  templateUrl: './ppm-view-list.component.html',
  styleUrls: ['./ppm-view-list.component.css']
})
export class PpmViewListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: ProductsData;

  constructor(
    private _ppmProductsDataService: PpmProductsDataService
  )
  {
    this.subscription = this._ppmProductsDataService.subject
      .subscribe( ( data ) => { this.products = data; }, ( err ) => {}, () => {} );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
