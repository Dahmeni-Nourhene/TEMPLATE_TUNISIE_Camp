import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lieux } from '../lieux/lieux.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class Activite {
  idAct!: number;
  nomActivite!: string;
  description!: string;
  horaire!: string;
  lieux!: Lieux[];
}