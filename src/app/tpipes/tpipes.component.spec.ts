import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPipesComponent } from './tpipes.component';

describe('TPipesComponent', () => {
  let component: TPipesComponent;
  let fixture: ComponentFixture<TPipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TPipesComponent]
    });
    fixture = TestBed.createComponent(TPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
