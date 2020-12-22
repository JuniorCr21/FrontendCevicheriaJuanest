import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuanestAdminComponent } from './juanest-admin.component';

describe('JuanestAdminComponent', () => {
  let component: JuanestAdminComponent;
  let fixture: ComponentFixture<JuanestAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuanestAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuanestAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
