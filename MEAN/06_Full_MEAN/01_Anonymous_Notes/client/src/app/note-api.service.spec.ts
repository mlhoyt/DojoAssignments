import { TestBed, inject } from '@angular/core/testing';

import { NoteApiService } from './note-api.service';

describe('NoteApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteApiService]
    });
  });

  it('should be created', inject([NoteApiService], (service: NoteApiService) => {
    expect(service).toBeTruthy();
  }));
});
