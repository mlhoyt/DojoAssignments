import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Note } from '../note';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {
  @Output() createEvent = new EventEmitter();
  data: Note = new Note();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.createEvent.emit( this.data );
    this.data = new Note();
  }
}
