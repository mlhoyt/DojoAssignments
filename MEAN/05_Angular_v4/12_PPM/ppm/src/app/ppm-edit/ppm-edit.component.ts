import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppm-edit',
  templateUrl: './ppm-edit.component.html',
  styleUrls: ['./ppm-edit.component.css']
})
export class PpmEditComponent implements OnInit {
  product = { id: 3, title: "abcd", price: "1.23", image_url: "../../assets/ppm-abcd.png" };

  constructor() { }

  ngOnInit() {
  }

  onUpdate() {
  }

  onDelete() {
  }
}
