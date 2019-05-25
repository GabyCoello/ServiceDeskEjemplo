import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateIncidenciaComponent } from './create-incidencia/create-incidencia.component';
import { IncidenciaListComponent } from './incidencia-list/incidencia-list.component';
import { SearchIncidenciaComponent } from './search-incidencia/search-incidencia.component';
import { IncidenciaDetailsComponent } from './incidencia-details/incidencia-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CreateIncidenciaComponent,
    IncidenciaListComponent,
    SearchIncidenciaComponent,
    IncidenciaDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
	HttpClientModule
	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
