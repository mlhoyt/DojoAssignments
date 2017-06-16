import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpmEditComponent } from './ppm-edit.component';

describe('PpmEditComponent', () => {
  let component: PpmEditComponent;
  let fixture: ComponentFixture<PpmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpmEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
