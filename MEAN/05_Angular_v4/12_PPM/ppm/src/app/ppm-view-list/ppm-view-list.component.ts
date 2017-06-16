import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppm-view-list',
  templateUrl: './ppm-view-list.component.html',
  styleUrls: ['./ppm-view-list.component.css']
})
export class PpmViewListComponent implements OnInit {
  product_id = 2;
  products = [
    { id: 1, name: "DSLR Camera", price: 1499.99, image_url: "../../assets/ppm-dslr.png" },
    { id: 2, name: "Laptop", price: 1299.99, image_url: "../../assets/ppm-laptop.png" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
