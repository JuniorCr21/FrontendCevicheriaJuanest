import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuanestComponent } from './juanest.component';

describe('JuanestComponent', () => {
  let component: JuanestComponent;
  let fixture: ComponentFixture<JuanestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuanestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuanestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
