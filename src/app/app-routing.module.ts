import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { ListFeedbackComponent } from './feedback/list-feedback/list-feedback.component';
import { ViewFeedbackComponent } from './feedback/view-feedback/view-feedback.component';
import { AddFeedbackComponent } from './feedback/add-feedback/add-feedback.component';
import { EditFeedbackComponent } from './feedback/edit-feedback/edit-feedback.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { ReservationAddComponent } from './reservation/reservation-add/reservation-add.component';
import { AuthGuard } from './models/utilisateur/auth-guard'; // Check this import path too
import { LoginComponent } from './models/utilisateur/login/login.component';
import { SigninComponent } from './models/utilisateur/signin/signin.component';

export const Approutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SigninComponent
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard], // Apply AuthGuard here
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
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
      // Add your routes here
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
    redirectTo: '/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(Approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
