import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { ListFeedbackComponent } from './feedback/list-feedback/list-feedback.component';
import { ViewFeedbackComponent } from './feedback/view-feedback/view-feedback.component';
import { AddFeedbackComponent } from './feedback/add-feedback/add-feedback.component';
import { EditFeedbackComponent } from './feedback/edit-feedback/edit-feedback.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { ReservationAddComponent } from './reservation/reservation-add/reservation-add.component';
import { CentreCamping } from './models/centre-camping/centre-camping.model';
import { CentrecampingComponent } from './component/camping/centrecamping/centrecamping.component';
import { AddCampingComponent } from './component/camping/add-camping/add-camping.component';
import { EditCampingComponent } from './component/camping/edit-camping/edit-camping.component';
import { LieuxCampingComponent } from './component/camping/lieux-camping/lieux-camping.component';
import { EditLieuxComponent } from './component/camping/edit-lieux/edit-lieux.component';
import { ActivitesComponent } from './component/camping/centrecamping/activites/activites.component';
import { EditActivitesComponent } from './component/camping/centrecamping/edit-activites/edit-activites.component';


// Importez vos composants


export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'camping',
        component:CentrecampingComponent
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },
      // Ajoutez vos routes ici
      { path: 'list-feedback', component: ListFeedbackComponent },
      { path: 'view-feedback/:id', component: ViewFeedbackComponent },
      { path: 'add-feedback', component: AddFeedbackComponent },
      { path: 'edit-feedback/:id', component: EditFeedbackComponent },
      { path: 'list-reservation', component: ReservationListComponent },
      { path: 'add-reservation', component: ReservationAddComponent },
      { path: 'add-camping', component: AddCampingComponent },
      { path: 'edit-camping/:id', component: EditCampingComponent },
      { path: 'lieux', component: LieuxCampingComponent },
      { path: 'edit-lieux/:id', component: EditLieuxComponent },
      { path: 'activites', component: ActivitesComponent },
      { path: 'edit-activites/:id', component: EditActivitesComponent }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
