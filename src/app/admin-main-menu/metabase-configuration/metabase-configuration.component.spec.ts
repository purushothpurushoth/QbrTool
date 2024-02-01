import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetabaseConfigurationComponent } from './metabase-configuration.component';

describe('MetabaseConfigurationComponent', () => {
  let component: MetabaseConfigurationComponent;
  let fixture: ComponentFixture<MetabaseConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetabaseConfigurationComponent]
    });
    fixture = TestBed.createComponent(MetabaseConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
