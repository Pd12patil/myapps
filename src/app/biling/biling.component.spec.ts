import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BilingComponent } from './biling.component';

describe('BilingComponent', () => {
  let component: BilingComponent;
  let fixture: ComponentFixture<BilingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BilingComponent]
    });
    fixture = TestBed.createComponent(BilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
