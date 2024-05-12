import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCampingComponent } from './edit-camping.component';

describe('EditCampingComponent', () => {
  let component: EditCampingComponent;
  let fixture: ComponentFixture<EditCampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCampingComponent]
    });
    fixture = TestBed.createComponent(EditCampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
