import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PpmProductsDataService {
  subject = new BehaviorSubject( null );

  constructor() { }

  update( data: Array<any> ) {
    this.subject.next( data );
  }
}
