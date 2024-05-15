import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';
import { NgbdpaginationBasicComponent } from './pagination/pagination.component';
import { NgbdAlertBasicComponent } from './alert/alert.component';
import { NgbdDropdownBasicComponent } from './dropdown-collapse/dropdown-collapse.component';
import { NgbdnavBasicComponent } from './nav/nav.component';
import { NgbdButtonsComponent } from './buttons/buttons.component';
import { CardsComponent } from './card/card.component';
import { TableComponent } from "../feedback/feedback-list/table.component";
import { CentrecampingComponent } from './camping/centrecamping/centrecamping.component';
import { AddCampingComponent } from './camping/add-camping/add-camping.component';
import { EditCampingComponent } from './camping/edit-camping/edit-camping.component';
import { LieuxCampingComponent } from './camping/lieux-camping/lieux-camping.component';
import { EditLieuxComponent } from './camping/edit-lieux/edit-lieux.component';
import { ActivitesComponent } from './camping/centrecamping/activites/activites.component';
import { EditActivitesComponent } from './camping/centrecamping/edit-activites/edit-activites.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdpaginationBasicComponent,
    NgbdAlertBasicComponent,
    NgbdDropdownBasicComponent,
    NgbdnavBasicComponent,
    NgbdButtonsComponent,
    CardsComponent,
    TableComponent
  ],
  declarations: [
    CentrecampingComponent,
    AddCampingComponent,
    EditCampingComponent,
    LieuxCampingComponent,
    EditLieuxComponent,
    ActivitesComponent,
    EditActivitesComponent
  ],
})
export class ComponentsModule { }
