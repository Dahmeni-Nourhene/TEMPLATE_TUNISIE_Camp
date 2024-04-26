import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { ListFeedbackComponent } from './feedback/list-feedback/list-feedback.component';
import { ViewFeedbackComponent } from './feedback/view-feedback/view-feedback.component';
import { AddFeedbackComponent } from './feedback/add-feedback/add-feedback.component';
import { EditFeedbackComponent } from './feedback/edit-feedback/edit-feedback.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { ReservationAddComponent } from './reservation/reservation-add/reservation-add.component';


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
