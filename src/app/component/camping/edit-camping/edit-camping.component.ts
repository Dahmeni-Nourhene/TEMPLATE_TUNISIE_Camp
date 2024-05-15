import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CentreCamping } from 'src/app/models/centre-camping/centre-camping.model';
import { Feedback } from 'src/app/models/feedback/feedback.model';
import { CentreCampingService } from 'src/app/services/centre-camping.service';
import { FeedbackApiService } from 'src/app/services/feedback-api.service';

@Component({
  selector: 'app-edit-camping',
  templateUrl: './edit-camping.component.html',
  styleUrls: ['./edit-camping.component.scss']
})
export class EditCampingComponent {
  editForm!: FormGroup;
  feedbackId!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private feedbackService: CentreCampingService
  ) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      description: ['', Validators.required]
    });

    // Récupération de l'identifiant du feedback depuis l'URL
    this.feedbackId = parseInt(this.route.snapshot.paramMap.get('id')!);

    // Chargement des détails du feedback à éditer
    this.loadFeedbackDetails();
  }

  loadFeedbackDetails(): void {
    this.feedbackService.getCentreCampingById(this.feedbackId).subscribe((feedback: CentreCamping) => {
      // Pré-remplissage du formulaire avec les détails du feedback
      this.editForm.patchValue({
        note: feedback.nom,
        commentaire: feedback.adresse,
        dateFeedback: feedback.description
      });
    });
  }

  onSubmit(): void {
    // Envoi des modifications au serveur
    this.feedbackService.updateCentreCamping(this.feedbackId, this.editForm.value).subscribe(() => {
      // Redirection vers la liste des feedbacks après l'édition
      this.router.navigate(['../camping']);
    });
  }

  cancelEdit(): void {
    // Redirection vers la liste des feedbacks sans sauvegarder les modifications
    this.router.navigate(['../camping']);
  }
}
