import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Lieux } from 'src/app/models/lieux/lieux.module';
import { LieuxService } from 'src/app/services/lieux.service';

@Component({
  selector: 'app-lieux-camping',
  templateUrl: './lieux-camping.component.html',
  styleUrls: ['./lieux-camping.component.scss']
})
export class LieuxCampingComponent {

  campings: Lieux[] = [];
  feedbackToDelete: Lieux | null = null;
  searchKeyword: string | null = null; // Modifier le type de string à string | null

  constructor(
    private router: Router,
    private centreCampingService: LieuxService
  ) { }

  ngOnInit(): void {
    this.loadCampings();
  }

  loadCampings(): void {
    const keyword = this.searchKeyword ? this.searchKeyword.trim() : ''; // Trim seulement si searchKeyword n'est pas null

    if (!keyword) {
      this.centreCampingService.getAllLieux().subscribe((data: Lieux[]) => {
        this.campings = data;
      });
    }
  }

  confirmDelete(centreCamping: Lieux): void {
    this.feedbackToDelete = centreCamping;
  }

  deleteCamping(id: number): void {
      console.log("id zabn",id)
      this.centreCampingService.deleteLieux(id).subscribe(() => {
        this.loadCampings();
        console.log("idee",id)
      });
    
  }

  editFeedback(camping: Lieux): void {
    this.router.navigate(['../edit-camping', camping.idLieux]);
  }
  goToActivites(){
    this.router.navigate(['/activites'])
  }
}
