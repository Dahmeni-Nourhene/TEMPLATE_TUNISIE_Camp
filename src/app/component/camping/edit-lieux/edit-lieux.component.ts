import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lieux } from 'src/app/models/lieux/lieux.module';
import { LieuxService } from 'src/app/services/lieux.service';

@Component({
  selector: 'app-edit-lieux',
  templateUrl: './edit-lieux.component.html',
  styleUrls: ['./edit-lieux.component.scss']
})
export class EditLieuxComponent {
  editForm!: FormGroup;
  idLieux!: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private feedbackService: LieuxService
  ) { }

  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      capacite: ['', Validators.required],
      tarifNuit: ['', Validators.required],
      centreCamping: ['', Validators.required],
      activites: ['', Validators.required]
    });

    // Récupération de l'identifiant du feedback depuis l'URL
    this.idLieux = parseInt(this.route.snapshot.paramMap.get('id')!);

    // Chargement des détails du feedback à éditer
    this.loadFeedbackDetails();
  }

  loadFeedbackDetails(): void {
    this.feedbackService.getLieuxById(this.idLieux).subscribe((feedback: Lieux) => {
     console.log("lieux", feedback)
      // Pré-remplissage du formulaire avec les détails du feedback
      this.editForm.patchValue({
        id:feedback.idLieux,
        nom: feedback.nom,
        description: feedback.description,
        capacite: feedback.capacite,
        tarifNuit: feedback.tarifNuit,
        centreCamping: feedback.centreCamping,
        activites: feedback.activites,
      });
    });
  }

  onSubmit(): void {
    // Envoi des modifications au serveur
    this.feedbackService.updateLieux(this.idLieux, this.editForm.value).subscribe(() => {
      // Redirection vers la liste des feedbacks après l'édition
      this.router.navigate(['../lieux']);
    });
  }

  cancelEdit(): void {
    // Redirection vers la liste des feedbacks sans sauvegarder les modifications
    this.router.navigate(['../lieux']);
  }
}
