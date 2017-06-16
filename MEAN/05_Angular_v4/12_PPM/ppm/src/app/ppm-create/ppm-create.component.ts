import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PpmProductsDataService } from '../ppm-products-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-ppm-create',
  templateUrl: './ppm-create.component.html',
  styleUrls: ['./ppm-create.component.css']
})
export class PpmCreateComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products = [];
  product = { title: "", price: "", image_url: "" };

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

  onSubmit() {
    this.products.push({
      id: Math.floor( 1 + (Math.random() * 100) ),
      title: this.product.title,
      price: this.product.price,
      image_url: this.product.image_url || "../../assets/ppm-no-image.png",
    })
    this._ppmProductsDataService.update( this.products );

    this.product = { title: "", price: "", image_url: "" };
    // redirectTo "/products"
  }
}
