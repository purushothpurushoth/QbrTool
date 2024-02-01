import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringProductivitySummaryComponent } from './engineering-productivity-summary.component';

describe('EngineeringProductivitySummaryComponent', () => {
  let component: EngineeringProductivitySummaryComponent;
  let fixture: ComponentFixture<EngineeringProductivitySummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineeringProductivitySummaryComponent]
    });
    fixture = TestBed.createComponent(EngineeringProductivitySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
