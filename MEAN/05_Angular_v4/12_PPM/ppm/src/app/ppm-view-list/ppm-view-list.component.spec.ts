import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpmViewListComponent } from './ppm-view-list.component';

describe('PpmViewListComponent', () => {
  let component: PpmViewListComponent;
  let fixture: ComponentFixture<PpmViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpmViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpmViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
