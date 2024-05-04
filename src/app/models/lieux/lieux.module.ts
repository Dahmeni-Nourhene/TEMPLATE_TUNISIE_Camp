import { Inject, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
 
export class Lieux {
  public idLieux!: number;
  public nom!: string;
  public description!: string;
  public capacite!: number;
  public tarifNuit!: number;
  public centreCamping!: string;  
  public activites!: string;    

}

