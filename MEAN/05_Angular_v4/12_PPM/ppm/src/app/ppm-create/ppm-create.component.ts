import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppm-create',
  templateUrl: './ppm-create.component.html',
  styleUrls: ['./ppm-create.component.css']
})
export class PpmCreateComponent implements OnInit {
  product_id = 2;
  products = [];
  product = { title: "", price: "", image_url: "" };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.products.push({
      id: ++this.product_id,
      title: this.product.title,
      price: this.product.price,
      image_url: this.product.image_url,
    })
    this.product = { title: "", price: "", image_url: "" };
    // redirectTo "/products"
  }
}
