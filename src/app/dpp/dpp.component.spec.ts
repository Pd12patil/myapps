import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DPPComponent } from './dpp.component';

describe('DPPComponent', () => {
  let component: DPPComponent;
  let fixture: ComponentFixture<DPPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DPPComponent]
    });
    fixture = TestBed.createComponent(DPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
