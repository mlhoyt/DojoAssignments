import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppm-view-list',
  templateUrl: './ppm-view-list.component.html',
  styleUrls: ['./ppm-view-list.component.css']
})
export class PpmViewListComponent implements OnInit {
  product_id = 4;
  products = [
    { id: 1, name: "DSLR Camera", price: 1499.99, image_url: "../../assets/ppm-dslr.png" },
    { id: 2, name: "Laptop", price: 1299.99, image_url: "../../assets/ppm-laptop.png" },
    { id: 3, name: "Monitor", price: 600.00, image_url: "../../assets/ppm-lcd-monitor.png" },
    { id: 4, name: "Keyboard", price: 99.00, image_url: "../../assets/ppm-wireless-keyboard.png" },
  //{ id: 5, name: "Mouse", price: 50.00, image_url: "../../assets/ppm-wireless-mouse.png" },
  ];

  constructor() { }

  ngOnInit() {
  }

}
