import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateIncidenciaComponent } from './create-incidencia/create-incidencia.component';
import { IncidenciaListComponent } from './incidencia-list/incidencia-list.component';

const routes: Routes = [
	{ path: '', redirectTo: 'incidencia', pathMatch: 'full' },   
    { path: 'add', component: CreateIncidenciaComponent },
	{ path: 'lista', component: IncidenciaListComponent },

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
