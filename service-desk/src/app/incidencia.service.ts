import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  private baseUrl = 'http://localhost:8080/api/incidencia';

  constructor(private http: HttpClient) { }

  crearIncidencia(incidencia: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `/crear`, incidencia);
  }

  actualizarIncidencia(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  getIncidenciaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lista`);
  }
  
}
