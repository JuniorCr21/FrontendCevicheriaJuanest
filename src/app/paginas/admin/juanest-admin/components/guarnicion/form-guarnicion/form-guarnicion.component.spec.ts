import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGuarnicionComponent } from './form-guarnicion.component';

describe('FormGuarnicionComponent', () => {
  let component: FormGuarnicionComponent;
  let fixture: ComponentFixture<FormGuarnicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGuarnicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGuarnicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
