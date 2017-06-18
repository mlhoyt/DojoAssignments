import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class GithubApiService {
  api_base_url: string = "https://api.github.com";

  constructor(
    private _http: Http
  )
  {}

  read_user( pk ) {
    return this._http.get( '${api_base_url}/users/${pk}' )
      .map( data => data.json() )
      .toPromise();
  }
}
