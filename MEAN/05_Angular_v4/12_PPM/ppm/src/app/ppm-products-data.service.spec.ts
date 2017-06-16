import { TestBed, inject } from '@angular/core/testing';

import { PpmProductsDataService } from './ppm-products-data.service';

describe('PpmProductsDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PpmProductsDataService]
    });
  });

  it('should be created', inject([PpmProductsDataService], (service: PpmProductsDataService) => {
    expect(service).toBeTruthy();
  }));
});
