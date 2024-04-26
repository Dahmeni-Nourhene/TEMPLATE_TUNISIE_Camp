import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Utilisateur, Reservation } from '../models/reservation/reservation.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  baseUrl: string = 'http://localhost:8082/api/reservations'; // Adjust URL as needed

  constructor(private http: HttpClient) { }

  // Get all reservations
  getAllReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.baseUrl}`);
  }

  // Get reservation by ID
  getReservationById(id: number): Observable<Reservation> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Reservation>(url, httpOptions);
  }

  // Create a new reservation
  createReservation(reservation: Reservation, utilisateur: Utilisateur): Observable<Reservation> {
    const urlWithUser = `${this.baseUrl}/user/${utilisateur.id}`;
    const reservationWithUser = { ...reservation, utilisateur };
    return this.http.post<Reservation>(urlWithUser, reservationWithUser, httpOptions);
  }

  // Update a reservation
  updateReservation(id: number, reservationDetails: Reservation): Observable<Reservation> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Reservation>(url, reservationDetails, httpOptions);
  }

  // Delete a reservation
  deleteReservation(id: number): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url, httpOptions);
  }

  // Get reservations by user full name
  getReservationsByUserFullName(nom: string, prenom: string): Observable<Reservation[]> {
    const url = `${this.baseUrl}/user/${nom}/${prenom}`;
    return this.http.get<Reservation[]>(url, httpOptions);
  }

  // Get reservations between dates
 /* getReservationsBetweenDates(startDate: Date, endDate: Date): Observable<Reservation[]> {
    const url = `${this.baseUrl}/dateRange?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`;
    return this.http.get<Reservation[]>(url, httpOptions);
  }*/

  // Get total amount of reservations by user
  getTotalAmountOfReservationsByUser(userId: number): Observable<number> {
    const url = `${this.baseUrl}/user/${userId}/totalAmount`;
    return this.http.get<number>(url, httpOptions);
  }

  // Get all reservations sorted by arrival date
  getAllReservationsSortedByArrivalDate(): Observable<Reservation[]> {
    const url = `${this.baseUrl}/sortedByArrivalDate`;
    return this.http.get<Reservation[]>(url, httpOptions);
  }

  // Assign Lieu to Reservation
  assignLieuToReservation(reservationId: number, lieuId: number): Observable<Reservation> {
    const url = `${this.baseUrl}/${reservationId}/assign-lieu/${lieuId}`;
    return this.http.post<Reservation>(url, {}, httpOptions); // Body might be necessary depending on implementation
  }

  // Cancel Reservation
  cancelReservation(reservationId: number): Observable<void> {
    const url = `${this.baseUrl}/${reservationId}/cancel`;
    return this.http.delete<void>(url, httpOptions);
  }
}
