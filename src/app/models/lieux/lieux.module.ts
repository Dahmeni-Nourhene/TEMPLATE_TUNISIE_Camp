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
  public capacite!: string;
  public tarifNuit!: string;
  public centreCamping!: string;  
  public activites!: string;    

}

