import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TReactiveFormComponent } from './t-reactive-form.component';

describe('TReactiveFormComponent', () => {
  let component: TReactiveFormComponent;
  let fixture: ComponentFixture<TReactiveFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TReactiveFormComponent]
    });
    fixture = TestBed.createComponent(TReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
