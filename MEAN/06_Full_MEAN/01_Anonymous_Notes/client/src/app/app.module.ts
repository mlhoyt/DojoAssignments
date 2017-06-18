import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NoteApiService } from './note-api.service';
import { NotesComponent } from './notes/notes.component';
import { NewNoteComponent } from './notes/new-note/new-note.component';
import { ListNotesComponent } from './notes/list-notes/list-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NewNoteComponent,
    ListNotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ NoteApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
