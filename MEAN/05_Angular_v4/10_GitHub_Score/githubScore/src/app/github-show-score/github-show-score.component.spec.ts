import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubShowScoreComponent } from './github-show-score.component';

describe('GithubShowScoreComponent', () => {
  let component: GithubShowScoreComponent;
  let fixture: ComponentFixture<GithubShowScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubShowScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubShowScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
