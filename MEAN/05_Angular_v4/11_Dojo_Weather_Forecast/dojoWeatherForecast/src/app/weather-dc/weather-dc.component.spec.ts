import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDcComponent } from './weather-dc.component';

describe('WeatherDcComponent', () => {
  let component: WeatherDcComponent;
  let fixture: ComponentFixture<WeatherDcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
