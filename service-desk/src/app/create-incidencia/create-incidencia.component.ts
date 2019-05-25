import { Component, OnInit } from '@angular/core';

import { Incidencia } from '../incidencia';
import { IncidenciaService } from '../incidencia.service';

@Component({
  selector: 'create-incidencia',
  templateUrl: './create-incidencia.component.html',
  styleUrls: ['./create-incidencia.component.css']
})
export class CreateIncidenciaComponent implements OnInit {

  incidencia: Incidencia = new Incidencia();
  submitted = false;

  constructor(private incidenciaService: IncidenciaService) { }

  ngOnInit() {
  }

  newIncidencia(): void {
    this.submitted = false;
    this.incidencia = new Incidencia();
  }

  save() {
    this.incidenciaService.crearIncidencia(this.incidencia)
      .subscribe(data => console.log(data), error => console.log(error));
    this.incidencia = new Incidencia();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
