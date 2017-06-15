import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSanjoseComponent } from './weather-sanjose.component';

describe('WeatherSanjoseComponent', () => {
  let component: WeatherSanjoseComponent;
  let fixture: ComponentFixture<WeatherSanjoseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSanjoseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSanjoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
