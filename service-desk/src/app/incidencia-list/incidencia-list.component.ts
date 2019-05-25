import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import { Incidencia } from '../incidencia';
import { IncidenciaService } from '../incidencia.service';

@Component({
  selector: 'incidencia-list',
  templateUrl: './incidencia-list.component.html',
  styleUrls: ['./incidencia-list.component.css']
})
export class IncidenciaListComponent implements OnInit {

incidencia: Observable<Incidencia[]>;

  constructor(private incidenciaService: IncidenciaService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.incidencia = this.incidenciaService.getIncidenciaList();
  }
}
