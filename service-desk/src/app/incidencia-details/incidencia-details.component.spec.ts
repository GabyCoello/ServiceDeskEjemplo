import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidenciaDetailsComponent } from './incidencia-details.component';

describe('IncidenciaDetailsComponent', () => {
  let component: IncidenciaDetailsComponent;
  let fixture: ComponentFixture<IncidenciaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidenciaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidenciaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
