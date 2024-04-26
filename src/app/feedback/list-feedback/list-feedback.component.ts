import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/models/feedback/feedback.model';
import { FeedbackApiService } from 'src/app/services/feedback-api.service';

declare var $: any;

@Component({
  selector: 'app-list-feedback',
  templateUrl: './list-feedback.component.html',
  styleUrls: ['./list-feedback.component.scss']
})
export class ListFeedbackComponent implements OnInit {
  feedbacks: Feedback[] = [];
  feedbackToDelete: Feedback | null = null;
  searchKeyword: string | null = null; // Modifier le type de string à string | null

  constructor(
    private router: Router,
    private feedbackService: FeedbackApiService
  ) { }

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(): void {
    const keyword = this.searchKeyword ? this.searchKeyword.trim() : ''; // Trim seulement si searchKeyword n'est pas null

    if (!keyword) {
      this.feedbackService.getAllFeedbacks().subscribe((data: Feedback[]) => {
        this.feedbacks = data;
      });
    } else {
      this.feedbackService.searchFeedbacks(keyword).subscribe((data: Feedback[]) => {
        this.feedbacks = data;
      });
    }
  }

  confirmDelete(feedback: Feedback): void {
    this.feedbackToDelete = feedback;
    $('#confirmDeleteModal').modal('show');
  }

  deleteFeedback(feedback: Feedback): void {
    if (feedback) {
      const feedbackId = feedback.idFeedback;
      this.feedbackService.deleteFeedback(feedbackId).subscribe(() => {
        this.loadFeedbacks();
        $('#confirmDeleteModal').modal('hide');
      });
    }
  }

  editFeedback(feedback: Feedback): void {
    this.router.navigate(['../edit-feedback', feedback.idFeedback]);
  }

  searchFeedbacks(): void {
    this.loadFeedbacks();
  }
}

