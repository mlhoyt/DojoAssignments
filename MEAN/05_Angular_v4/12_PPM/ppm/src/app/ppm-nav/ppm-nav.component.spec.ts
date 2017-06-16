import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpmNavComponent } from './ppm-nav.component';

describe('PpmNavComponent', () => {
  let component: PpmNavComponent;
  let fixture: ComponentFixture<PpmNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpmNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpmNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
