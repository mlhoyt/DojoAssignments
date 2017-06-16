import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpmHomeComponent } from './ppm-home.component';

describe('PpmHomeComponent', () => {
  let component: PpmHomeComponent;
  let fixture: ComponentFixture<PpmHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpmHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
