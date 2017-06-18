import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteApiService {
  constructor(
    private _http: Http
  )
  {}

  create( item ) {
    return this._http.post( '/notes', item )
      .map( data => data.json() )
      .toPromise();
  }

  read_all() {
    return this._http.get( '/notes' )
      .map( data => data.json() )
      .toPromise();
  }

  read_one( id ) {
    return this._http.get( '/notes/${id}' )
      .map( data => data.json() )
      .toPromise();
  }

  update( item, id ) {
    return this._http.put( '/notes/${id}', item )
      .map( data => data.json() )
      .toPromise();
  }

  delete( id ) {
    return this._http.delete( '/notes/${id}' )
      .map( data => data.json() )
      .toPromise();
  }
}
