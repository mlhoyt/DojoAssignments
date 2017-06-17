import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { PpmProductsDataService } from '../ppm-products-data.service';
import { Subscription } from 'rxjs/Subscription';
import { ProductsData } from '../products-data';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ppm-create',
  templateUrl: './ppm-create.component.html',
  styleUrls: ['./ppm-create.component.css']
})
export class PpmCreateComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  products: ProductsData;
  product = { title: "", price: "", image_url: "" };

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

  onSubmit() {
    this.products.items.push({
      id: ++this.products.last_id,
      title: this.product.title,
      price: this.product.price,
      image_url: this.product.image_url || "../../assets/ppm-no-image.png",
    })
    this._ppmProductsDataService.update( this.products );

    this.product = { title: "", price: "", image_url: "" };

    this._router.navigate( ['/products'] );
  }
}
