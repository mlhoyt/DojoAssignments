import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDallasComponent } from './weather-dallas.component';

describe('WeatherDallasComponent', () => {
  let component: WeatherDallasComponent;
  let fixture: ComponentFixture<WeatherDallasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDallasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDallasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
