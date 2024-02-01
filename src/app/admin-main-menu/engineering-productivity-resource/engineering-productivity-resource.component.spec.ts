import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringProductivityResourceComponent } from './engineering-productivity-resource.component';

describe('EngineeringProductivityResourceComponent', () => {
  let component: EngineeringProductivityResourceComponent;
  let fixture: ComponentFixture<EngineeringProductivityResourceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngineeringProductivityResourceComponent]
    });
    fixture = TestBed.createComponent(EngineeringProductivityResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
