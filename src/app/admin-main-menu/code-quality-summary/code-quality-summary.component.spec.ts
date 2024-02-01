import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeQualitySummaryComponent } from './code-quality-summary.component';

describe('CodeQualitySummaryComponent', () => {
  let component: CodeQualitySummaryComponent;
  let fixture: ComponentFixture<CodeQualitySummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeQualitySummaryComponent]
    });
    fixture = TestBed.createComponent(CodeQualitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
