import { Component, OnInit } from '@angular/core';
import { NoteApiService } from '../note-api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes = [];

  constructor(
    private _noteApi: NoteApiService
  )
  {}

  ngOnInit() {
    this.get_all_notes();
  }

  get_all_notes() {
    this._noteApi.read_all()
      .catch( err => { console.log( "Error: NotesComponent: get_all_notes:", err ); } )
      .then( data => { this.notes = data; } );
  }

  create_note( data ) {
    this._noteApi.create( data )
      .catch( err => { console.log( "Error: NotesComponent: create_notes:", err ); } )
      .then( () => { this.get_all_notes(); } );
  }
}
