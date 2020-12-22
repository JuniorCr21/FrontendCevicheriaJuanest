import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaPagoComponent } from './mesa-pago.component';

describe('MesaPagoComponent', () => {
  let component: MesaPagoComponent;
  let fixture: ComponentFixture<MesaPagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaPagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
