import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lieux } from '../lieux/lieux.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class CentreCamping {
  idCentre!: number;
  adresse!: string;
  nom!: string;
  description!: string;
  lieux!: Lieux[]; // Utiliser le modèle Lieux pour refléter la relation OneToMany

  
}

