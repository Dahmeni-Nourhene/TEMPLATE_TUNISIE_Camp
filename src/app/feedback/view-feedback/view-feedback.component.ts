import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Feedback } from 'src/app/models/feedback/feedback.model';
import { FeedbackApiService } from 'src/app/services/feedback-api.service';

@Component({
  selector: 'app-view-feedback',
  templateUrl: './view-feedback.component.html',
  styleUrls: ['./view-feedback.component.scss']
})
export class ViewFeedbackComponent implements OnInit {
  feedback!: Feedback;

  constructor(private route: ActivatedRoute, private feedbackService: FeedbackApiService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.feedbackService.getFeedbackById(id).subscribe((data: Feedback) => {
      this.feedback = data;
    });
  }
}
