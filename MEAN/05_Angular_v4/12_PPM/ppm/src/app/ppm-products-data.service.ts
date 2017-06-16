import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductsData } from './products-data';

@Injectable()
export class PpmProductsDataService {
  subject = new BehaviorSubject( null );

  constructor() { }

  update( data: ProductsData ) {
    this.subject.next( data );
  }
}
