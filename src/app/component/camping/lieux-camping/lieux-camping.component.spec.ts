import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LieuxCampingComponent } from './lieux-camping.component';

describe('LieuxCampingComponent', () => {
  let component: LieuxCampingComponent;
  let fixture: ComponentFixture<LieuxCampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LieuxCampingComponent]
    });
    fixture = TestBed.createComponent(LieuxCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
