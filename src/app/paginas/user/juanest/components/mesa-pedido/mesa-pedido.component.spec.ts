import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaPedidoComponent } from './mesa-pedido.component';

describe('MesaPedidoComponent', () => {
  let component: MesaPedidoComponent;
  let fixture: ComponentFixture<MesaPedidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MesaPedidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
