import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { ListFeedbackComponent } from './feedback/list-feedback/list-feedback.component';
import { ViewFeedbackComponent } from './feedback/view-feedback/view-feedback.component';
import { AddFeedbackComponent } from './feedback/add-feedback/add-feedback.component';
import { EditFeedbackComponent } from './feedback/edit-feedback/edit-feedback.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { ReservationAddComponent } from './reservation/reservation-add/reservation-add.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ListFeedbackComponent,
    ViewFeedbackComponent,
    AddFeedbackComponent,
    EditFeedbackComponent,
    ReservationListComponent,
    ReservationAddComponent,
   
   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
