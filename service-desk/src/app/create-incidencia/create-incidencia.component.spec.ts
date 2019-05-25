import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIncidenciaComponent } from './create-incidencia.component';

describe('CreateIncidenciaComponent', () => {
  let component: CreateIncidenciaComponent;
  let fixture: ComponentFixture<CreateIncidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateIncidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
