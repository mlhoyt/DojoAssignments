import { Component, OnInit } from '@angular/core';
import { PpmProductsDataService } from '../ppm-products-data.service';

@Component({
  selector: 'app-ppm-nav',
  templateUrl: './ppm-nav.component.html',
  styleUrls: ['./ppm-nav.component.css']
})
export class PpmNavComponent implements OnInit {
  productsData = [
    { id: 1, title: "DSLR Camera", price: 1499.99, image_url: "../../assets/ppm-dslr.png" },
    { id: 2, title: "Laptop", price: 1299.99, image_url: "../../assets/ppm-laptop.png" },
    { id: 3, title: "Monitor", price: 600.00, image_url: "../../assets/ppm-lcd-monitor.png" },
    { id: 4, title: "Keyboard", price: 99.00, image_url: "../../assets/ppm-wireless-keyboard.png" },
  //{ id: 5, title: "Mouse", price: 50.00, image_url: "../../assets/ppm-wireless-mouse.png" },
  ];

  constructor(
    private _ppmProductsDataService: PpmProductsDataService
  )
  {
    this._ppmProductsDataService.subject.next( this.productsData );
  }

  ngOnInit() {
  }
}
