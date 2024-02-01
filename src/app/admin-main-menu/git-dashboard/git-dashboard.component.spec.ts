import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitDashboardComponent } from './git-dashboard.component';

describe('GitDashboardComponent', () => {
  let component: GitDashboardComponent;
  let fixture: ComponentFixture<GitDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitDashboardComponent]
    });
    fixture = TestBed.createComponent(GitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
