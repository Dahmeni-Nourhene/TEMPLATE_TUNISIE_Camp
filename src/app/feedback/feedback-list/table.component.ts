import { Component, OnInit } from '@angular/core';
import { Product, TopSelling, TableRows, Employee } from './table-data';
import { NgFor } from '@angular/common';
import { FeedbackApiService } from 'src/app/services/feedback-api.service';
import { Feedback } from 'src/app/models/feedback/feedback.model';


@Component({
  selector: 'app-table',
  standalone: true,
  imports:[NgFor],
  templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {

  feedbackList: Feedback[] = []; // Define property to store feedback list

  constructor(private apiService: FeedbackApiService) { }

  ngOnInit(): void {
    this.fetchFeedbackList(); // Fetch feedback list when component initializes
  }

  fetchFeedbackList(): void {
    this.apiService.getAllFeedbacks().subscribe(
      (data) => {
        this.feedbackList = data; // Assign fetched feedback list to component property
      },
      (error) => {
        console.error('Error fetching feedback list:', error);
      }
    );
  }
}
