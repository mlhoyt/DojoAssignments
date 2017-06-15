import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBurbankComponent } from './weather-burbank.component';

describe('WeatherBurbankComponent', () => {
  let component: WeatherBurbankComponent;
  let fixture: ComponentFixture<WeatherBurbankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBurbankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBurbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
