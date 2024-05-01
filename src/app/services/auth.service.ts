import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8082/v1/auth';
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) { }

  authenticate(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/authenticate`, credentials);
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/register`, user);
  }
  isLoggedIn(): boolean {
    // Check if token exists in local storage
    return !!localStorage.getItem(this.tokenKey);
  }
  logout(): void {
    // Remove token from local storage
    localStorage.removeItem(this.tokenKey);
  }
}
