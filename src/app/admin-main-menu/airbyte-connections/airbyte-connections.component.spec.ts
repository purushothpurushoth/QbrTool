import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbyteConnectionsComponent } from './airbyte-connections.component';

describe('AirbyteConnectionsComponent', () => {
  let component: AirbyteConnectionsComponent;
  let fixture: ComponentFixture<AirbyteConnectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirbyteConnectionsComponent]
    });
    fixture = TestBed.createComponent(AirbyteConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
