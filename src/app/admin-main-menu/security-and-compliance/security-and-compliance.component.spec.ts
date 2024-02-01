import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityAndComplianceComponent } from './security-and-compliance.component';

describe('SecurityAndComplianceComponent', () => {
  let component: SecurityAndComplianceComponent;
  let fixture: ComponentFixture<SecurityAndComplianceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityAndComplianceComponent]
    });
    fixture = TestBed.createComponent(SecurityAndComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
