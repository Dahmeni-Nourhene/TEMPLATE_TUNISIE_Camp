import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CentreCamping } from 'src/app/models/centre-camping/centre-camping.model';
import { CentreCampingService } from 'src/app/services/centre-camping.service';

@Component({
  selector: 'app-add-camping',
  templateUrl: './add-camping.component.html',
  styleUrls: ['./add-camping.component.scss']
})
export class AddCampingComponent {
  feedbackForm!: FormGroup; // Déclaration de feedbackForm

  nom: string ='';
  adresse: string = '';
  description: string = '';

  constructor(private router: Router, 
              private feedbackService: CentreCampingService,
              private formBuilder: FormBuilder) { }

              ngOnInit(): void {
                this.feedbackForm = this.formBuilder.group({
                  nom: ['', Validators.required],
                  adresse: ['', Validators.required],
                  description: ['', [Validators.required]]
                });
              }

              onSubmit(): void {            
                const feedbackData = this.feedbackForm.value as CentreCamping;
            
                this.feedbackService.createCentreCamping(feedbackData).subscribe(() => {
                  console.log("added successfully!")
                }, (error: any) => {
                  console.log("error:",error)
                });
              }
              cancel(): void {
                this.router.navigate(['../camping']);
              }
}
