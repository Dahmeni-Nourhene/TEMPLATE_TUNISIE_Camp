import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activite } from 'src/app/models/activite/activite.module';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
  selector: 'app-edit-activites',
  templateUrl: './edit-activites.component.html',
  styleUrls: ['./edit-activites.component.scss']
})
export class EditActivitesComponent {
  editForm!: FormGroup;
  feedbackId!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private feedbackService: ActiviteService
  ) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      nomActivite: ['', Validators.required],
      horaire: ['', Validators.required],
      description: ['', Validators.required],
      lieux: ['', Validators.required]

    });

    // Récupération de l'identifiant du feedback depuis l'URL
    this.feedbackId = parseInt(this.route.snapshot.paramMap.get('id')!);

    // Chargement des détails du feedback à éditer
    this.loadFeedbackDetails();
  }

  loadFeedbackDetails(): void {
    this.feedbackService.getActiviteById(this.feedbackId).subscribe((feedback: Activite) => {
      // Pré-remplissage du formulaire avec les détails du feedback
      this.editForm.patchValue({
        nomActivite: feedback.nomActivite,
        horaire: feedback.horaire,
        dateFeedback: feedback.description,
        lieux: feedback.lieux

      });
    });
  }

  onSubmit(): void {
    // Envoi des modifications au serveur
    this.feedbackService.updateActivite(this.feedbackId, this.editForm.value).subscribe(() => {
      // Redirection vers la liste des feedbacks après l'édition
      this.router.navigate(['../activites']);
    });
  }

  cancelEdit(): void {
    // Redirection vers la liste des feedbacks sans sauvegarder les modifications
    this.router.navigate(['../activites']);
  }
}
