import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentMarkEvaluatioComponent } from './student-mark-evaluatio.component';

describe('StudentMarkEvaluatioComponent', () => {
  let component: StudentMarkEvaluatioComponent;
  let fixture: ComponentFixture<StudentMarkEvaluatioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentMarkEvaluatioComponent]
    });
    fixture = TestBed.createComponent(StudentMarkEvaluatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
