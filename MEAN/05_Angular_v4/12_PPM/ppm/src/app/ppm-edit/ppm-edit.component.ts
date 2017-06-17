import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PpmProductsDataService } from '../ppm-products-data.service';
import { Subscription } from 'rxjs/Subscription';
import { ProductsData } from '../products-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ppm-edit',
  templateUrl: './ppm-edit.component.html',
  styleUrls: ['./ppm-edit.component.css']
})
export class PpmEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: ProductsData;
  // product = { id: 3, title: "abcd", price: "1.23", image_url: "../../assets/ppm-abcd.png" };
  product = { id: "", title: "", price: "", image_url: "" };

  constructor(
    private _ppmProductsDataService: PpmProductsDataService,
    private _route: ActivatedRoute,
    private _router: Router
  )
  {
    this.subscription = this._ppmProductsDataService.subject
      .subscribe( ( data ) => { this.products = data; }, ( err ) => {}, () => {} );
    this._route.params.subscribe( ( params ) => {
      // this.product.id = params.id;
      for( let i = 0; i < this.products.items.length; ++i ) {
        if( this.products.items[ i ].id == params.id ) {
          this.product = this.products.items[ i ];
        }
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    // this._route.params.unsubscribe();
  }

  onClickUpdate() {
    this._ppmProductsDataService.subject.next( this.products );
    this._router.navigate( ['/products'] );
  }

  onClickDelete() {
    for( let i = 0; i < this.products.items.length; ++i ) {
      if( this.products.items[i].id === this.product.id ) {
        this.products.items.splice( i, 1 );
        this._ppmProductsDataService.subject.next( this.products );
        break;
      }
    }
    this._router.navigate( ['/products'] );
  }
}
