import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lieux } from '../models/lieux/lieux.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LieuxService {

  private apiUrl = 'http://localhost:8082/lieux';  // Adaptez l'URL selon votre configuration

  constructor(private http: HttpClient) { }

  createLieux(lieux: Lieux): Observable<Lieux> {
    return this.http.post<Lieux>(this.apiUrl, lieux);
  }

  getLieuxById(id: number): Observable<Lieux> {
    return this.http.get<Lieux>(`${this.apiUrl}/${id}`);
  }

  getAllLieux(): Observable<Lieux[]> {
    return this.http.get<Lieux[]>(this.apiUrl);
  }

  updateLieux(id: number, lieux: Lieux): Observable<Lieux> {
    return this.http.put<Lieux>(`${this.apiUrl}/${id}`, lieux);
  }

  deleteLieux(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}