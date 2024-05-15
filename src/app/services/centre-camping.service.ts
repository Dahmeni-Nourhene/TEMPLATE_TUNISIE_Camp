import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CentreCamping } from '../models/centre-camping/centre-camping.model';

@Injectable({
  providedIn: 'root'
})
export class CentreCampingService {
  private apiUrl = 'http://localhost:8082/centres-camping'; // URL de votre API

  constructor(private http: HttpClient) {}

  createCentreCamping(centreCamping: CentreCamping): Observable<CentreCamping> {
    return this.http.post<CentreCamping>(`${this.apiUrl}/create`, centreCamping, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  getCentreCampingById(id: number): Observable<CentreCamping> {
    return this.http.get<CentreCamping>(`${this.apiUrl}/${id}`);
  }

  getAllCentreCampings(): Observable<CentreCamping[]> {
    return this.http.get<CentreCamping[]>(`${this.apiUrl}/all`);
  }

  updateCentreCamping(id: number, centreCamping: CentreCamping): Observable<CentreCamping> {
    return this.http.put<CentreCamping>(`${this.apiUrl}/update/${id}`, centreCamping, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  deleteCentreCamping(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${id}`);
  }
}
