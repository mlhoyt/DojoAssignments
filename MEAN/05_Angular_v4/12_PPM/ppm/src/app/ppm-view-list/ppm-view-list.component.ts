import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PpmProductsDataService } from '../ppm-products-data.service';
import { Subscription } from 'rxjs/Subscription';
import { ProductsData } from '../products-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ppm-view-list',
  templateUrl: './ppm-view-list.component.html',
  styleUrls: ['./ppm-view-list.component.css']
})
export class PpmViewListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: ProductsData;

  constructor(
    private _ppmProductsDataService: PpmProductsDataService,
    private _router: Router
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

  onClickEdit( id ) {
    this._router.navigate( ['/products', 'edit', id ] );
  }

  onClickDelete( id ) {
    for( let i = 0; i < this.products.items.length; ++i ) {
      if( this.products.items[i].id === id ) {
        this.products.items.splice( i, 1 );
        this._ppmProductsDataService.subject.next( this.products );
        break;
      }
    }
  }
}
