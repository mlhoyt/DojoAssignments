import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  @Output() createEvent = new EventEmitter();
  data = { text: "" };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.createEvent.emit( this.data );
    this.data = { text: "" };
  }
}
