import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpmCreateComponent } from './ppm-create.component';

describe('PpmCreateComponent', () => {
  let component: PpmCreateComponent;
  let fixture: ComponentFixture<PpmCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpmCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpmCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
