import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../models/feedback/feedback.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackApiService {

  private apiUrl = 'http://localhost:8082/api/feedbacks'; // Replace this with your API endpoint

  constructor(private http: HttpClient) { }

  getAllFeedbacks(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}`);
  }

  getAllFeedbacksByUserId(userId: number): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/user/${userId}`);
  }

  getFeedbackById(id: number): Observable<Feedback> {
    return this.http.get<Feedback>(`${this.apiUrl}/${id}`);
  }

  searchFeedbacks(keyword: string): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.apiUrl}/search?keyword=${keyword}`);
  }

  submitFeedback(userId: number, feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.apiUrl}/user/${userId}`, feedback);
  }

  updateFeedback(id: number, newFeedback: Feedback): Observable<Feedback> {
    return this.http.put<Feedback>(`${this.apiUrl}/${id}`, newFeedback);
  }

  deleteFeedback(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
