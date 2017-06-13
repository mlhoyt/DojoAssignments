import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-human',
  templateUrl: './human.component.html',
  styleUrls: ['./human.component.css']
})
export class HumanComponent {
  @Input() typeLabel;
  @Input() powerScale;
  @Input() powerLevel;
  valueComment: string = "";

  constructor() { }

  ngOnChanges() {
    this.updateValueComment();
  }

  updateValueComment() {
     let power = this.powerLevel * this.powerScale;
     if( power == 50000 ) {
       this.valueComment = "The One";
     }
     else if( power > 20000 ) {
       this.valueComment = "Superlative!";
     }
     else if( power > 9000 ) {
       this.valueComment = "Over 9000!";
     }
     else {
       this.valueComment = "";
     }
  }
}
