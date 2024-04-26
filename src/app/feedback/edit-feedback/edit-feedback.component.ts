import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackApiService } from 'src/app/services/feedback-api.service';
import { Feedback } from 'src/app/models/feedback/feedback.model';

@Component({
  selector: 'app-edit-feedback',
  templateUrl: './edit-feedback.component.html',
  styleUrls: ['./edit-feedback.component.scss']
})
export class EditFeedbackComponent implements OnInit {
  editForm!: FormGroup;
  feedbackId!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private feedbackService: FeedbackApiService
  ) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      note: ['', Validators.required],
      commentaire: ['', Validators.required],
      dateFeedback: ['', Validators.required]
    });

    // Récupération de l'identifiant du feedback depuis l'URL
    this.feedbackId = parseInt(this.route.snapshot.paramMap.get('id')!, 10);

    // Chargement des détails du feedback à éditer
    this.loadFeedbackDetails();
  }

  loadFeedbackDetails(): void {
    this.feedbackService.getFeedbackById(this.feedbackId).subscribe((feedback: Feedback) => {
      // Pré-remplissage du formulaire avec les détails du feedback
      this.editForm.patchValue({
        note: feedback.note,
        commentaire: feedback.commentaire,
        dateFeedback: feedback.dateFeedback
      });
    });
  }

  onSubmit(): void {
    // Envoi des modifications au serveur
    this.feedbackService.updateFeedback(this.feedbackId, this.editForm.value).subscribe(() => {
      // Redirection vers la liste des feedbacks après l'édition
      this.router.navigate(['../list-feedback']);
    });
  }

  cancelEdit(): void {
    // Redirection vers la liste des feedbacks sans sauvegarder les modifications
    this.router.navigate(['../list-feedback']);
  }
}
