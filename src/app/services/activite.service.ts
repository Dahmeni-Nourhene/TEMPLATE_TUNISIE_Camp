import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {
  private apiUrl = 'http://localhost:8080/api/activites';  // URL de votre API back-end

  constructor(private http: HttpClient) {}

  createActivite(activite: ActiviteService): Observable<ActiviteService> {
    return this.http.post<ActiviteService>(this.apiUrl, activite);
  }

  getActiviteById(id: number): Observable<ActiviteService> {
    return this.http.get<ActiviteService>(`${this.apiUrl}/${id}`);
  }

  getAllActivites(): Observable<ActiviteService[]> {
    return this.http.get<ActiviteService[]>(this.apiUrl);
  }

  updateActivite(id: number, activite: ActiviteService): Observable<ActiviteService> {
    return this.http.put<ActiviteService>(`${this.apiUrl}/${id}`, activite);
  }

  deleteActivite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}