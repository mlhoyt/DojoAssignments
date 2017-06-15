import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSeattleComponent } from './weather-seattle.component';

describe('WeatherSeattleComponent', () => {
  let component: WeatherSeattleComponent;
  let fixture: ComponentFixture<WeatherSeattleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSeattleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSeattleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
