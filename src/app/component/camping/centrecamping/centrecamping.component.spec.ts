import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrecampingComponent } from './centrecamping.component';

describe('CentrecampingComponent', () => {
  let component: CentrecampingComponent;
  let fixture: ComponentFixture<CentrecampingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CentrecampingComponent]
    });
    fixture = TestBed.createComponent(CentrecampingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
