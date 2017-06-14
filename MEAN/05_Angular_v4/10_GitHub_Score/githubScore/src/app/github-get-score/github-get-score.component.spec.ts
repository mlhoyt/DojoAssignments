import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubGetScoreComponent } from './github-get-score.component';

describe('GithubGetScoreComponent', () => {
  let component: GithubGetScoreComponent;
  let fixture: ComponentFixture<GithubGetScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubGetScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubGetScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
