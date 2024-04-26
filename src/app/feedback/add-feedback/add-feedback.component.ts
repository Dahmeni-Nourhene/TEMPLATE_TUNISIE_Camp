import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from 'src/app/models/feedback/feedback.model';
import { FeedbackApiService } from 'src/app/services/feedback-api.service';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.scss']
})
export class AddFeedbackComponent implements OnInit {
  feedbackForm!: FormGroup; // Déclaration de feedbackForm

  userId: number | null = null;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router, 
              private feedbackService: FeedbackApiService,
              private formBuilder: FormBuilder) { }

              ngOnInit(): void {
                // Récupérer l'ID de l'utilisateur à partir de la session ou d'autres sources
                this.userId = 1; // Exemple d'initialisation de l'ID de l'utilisateur
                // Initialisation de feedbackForm dans le hook ngOnInit
                this.feedbackForm = this.formBuilder.group({
                  commentaire: ['', Validators.required],
                  dateFeedback: ['', Validators.required],
                  note: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
                });
              }

              onSubmit(): void {
                // Vérifier si userId est défini
                if (this.userId === null) {
                  console.error('User ID is not provided.');
                  return;
                }
            
                if (this.feedbackForm.invalid) {
                  console.log("Invalid form");
                  return;
                }
            
                const feedbackData = this.feedbackForm.value as Feedback;
            
                this.feedbackService.submitFeedback(this.userId, feedbackData).subscribe(() => {
                  this.successMessage = 'Feedback submitted successfully.';
                  this.errorMessage = ''; // Clear error message if there was one before
                  setTimeout(() => {
                    this.router.navigate(['../list-feedback']);
                  }, 2000); // Redirect to feedback list after 2 seconds
                }, (error: any) => {
                  this.errorMessage = 'Failed to submit feedback. Please try again later.';
                  this.successMessage = ''; // Clear success message if there was one before
                });
              }
              cancel(): void {
                this.router.navigate(['../list-feedback']);
              }
}
