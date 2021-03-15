import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSigninTuLearnComponent } from './new-signin-tu-learn.component';

describe('NewSigninTuLearnComponent', () => {
  let component: NewSigninTuLearnComponent;
  let fixture: ComponentFixture<NewSigninTuLearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSigninTuLearnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSigninTuLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
