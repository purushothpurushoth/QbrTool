import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitAnalyticsDashboardComponent } from './git-analytics-dashboard.component';

describe('GitAnalyticsDashboardComponent', () => {
  let component: GitAnalyticsDashboardComponent;
  let fixture: ComponentFixture<GitAnalyticsDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitAnalyticsDashboardComponent]
    });
    fixture = TestBed.createComponent(GitAnalyticsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
