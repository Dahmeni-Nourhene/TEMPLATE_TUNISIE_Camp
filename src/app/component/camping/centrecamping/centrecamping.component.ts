import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CentreCamping } from 'src/app/models/centre-camping/centre-camping.model';
import { CentreCampingService } from 'src/app/services/centre-camping.service';

@Component({
  selector: 'app-centrecamping',
  templateUrl: './centrecamping.component.html',
  styleUrls: ['./centrecamping.component.scss']
})
export class CentrecampingComponent {


  campings: CentreCamping[] = [];
  feedbackToDelete: CentreCamping | null = null;
  searchKeyword: string | null = null; // Modifier le type de string à string | null

  constructor(
    private router: Router,
    private centreCampingService: CentreCampingService
  ) { }

  ngOnInit(): void {
    this.loadCampings();
  }

  loadCampings(): void {
    const keyword = this.searchKeyword ? this.searchKeyword.trim() : ''; // Trim seulement si searchKeyword n'est pas null

    if (!keyword) {
      this.centreCampingService.getAllCentreCampings().subscribe((data: CentreCamping[]) => {
        this.campings = data;
      });
    }
  }

  confirmDelete(centreCamping: CentreCamping): void {
    this.feedbackToDelete = centreCamping;
  }

  deleteCamping(id: number): void {
      console.log("id zabn",id)
      this.centreCampingService.deleteCentreCamping(id).subscribe(() => {
        this.loadCampings();
        console.log("idee",id)
      });
    
  }

  editFeedback(camping: CentreCamping): void {
    this.router.navigate(['../edit-feedback', camping.idCentre]);
  }

  
}

