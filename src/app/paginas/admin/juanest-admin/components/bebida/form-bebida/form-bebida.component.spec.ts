import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBebidaComponent } from './form-bebida.component';

describe('FormBebidaComponent', () => {
  let component: FormBebidaComponent;
  let fixture: ComponentFixture<FormBebidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBebidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
