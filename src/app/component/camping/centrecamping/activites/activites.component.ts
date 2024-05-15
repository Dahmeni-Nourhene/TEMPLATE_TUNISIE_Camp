import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activite } from 'src/app/models/activite/activite.module';
import { ActiviteService } from 'src/app/services/activite.service';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent {


  campings: Activite[] = [];
  feedbackToDelete: Activite | null = null;
  searchKeyword: string | null = null; // Modifier le type de string à string | null

  constructor(
    private router: Router,
    private centreCampingService: ActiviteService
  ) { }

  ngOnInit(): void {
    this.loadCampings();
  }

  
  loadCampings(): void {
    const keyword = this.searchKeyword ? this.searchKeyword.trim() : ''; // Trim seulement si searchKeyword n'est pas null

    if (!keyword) {
      this.centreCampingService.getAllActivites().subscribe((data: Activite[]) => {
        this.campings = data;
      });
    }
  }
  confirmDelete(centreCamping: Activite): void {
    this.feedbackToDelete = centreCamping;
  }

  deleteCamping(id: number): void {
      console.log("id zabn",id)
      this.centreCampingService.deleteActivite(id).subscribe(() => {
        this.loadCampings();
        console.log("idee",id)
      });
    
  }

  editFeedback(camping: Activite): void {
    this.router.navigate(['../edit-camping', camping.idAct]);
  }

  goToLieux(){
    this.router.navigate(['/camping'])
  }
}
