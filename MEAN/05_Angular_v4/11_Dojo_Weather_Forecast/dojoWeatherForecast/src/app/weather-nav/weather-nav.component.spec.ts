import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNavComponent } from './weather-nav.component';

describe('WeatherNavComponent', () => {
  let component: WeatherNavComponent;
  let fixture: ComponentFixture<WeatherNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
