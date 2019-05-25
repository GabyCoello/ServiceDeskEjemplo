import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIncidenciaComponent } from './search-incidencia.component';

describe('SearchIncidenciaComponent', () => {
  let component: SearchIncidenciaComponent;
  let fixture: ComponentFixture<SearchIncidenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIncidenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
