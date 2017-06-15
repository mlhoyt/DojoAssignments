import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherChicagoComponent } from './weather-chicago.component';

describe('WeatherChicagoComponent', () => {
  let component: WeatherChicagoComponent;
  let fixture: ComponentFixture<WeatherChicagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherChicagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherChicagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
