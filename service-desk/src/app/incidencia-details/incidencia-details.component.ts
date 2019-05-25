import { Component, OnInit, Input } from '@angular/core';
import { Incidencia } from '../incidencia';
import { IncidenciaService } from '../incidencia.service';

import { IncidenciaListComponent } from '../incidencia-list/incidencia-list.component';

@Component({
  selector: 'incidencia-details',
  templateUrl: './incidencia-details.component.html',
  styleUrls: ['./incidencia-details.component.css']
})
export class IncidenciaDetailsComponent implements OnInit {

@Input() incidencia: Incidencia;

  constructor(private incidenciaService: IncidenciaService, private listComponent: IncidenciaListComponent) { }

  ngOnInit() {
  }

  updateIncidencia(isActive: boolean) {
    this.incidenciaService.actualizarIncidencia(this.incidencia.idincidencia,
      { tecnico: this.incidencia.tecnico, aprobado: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.incidencia = data as Incidencia;
        },
        error => console.log(error));
  }

  
}
