import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/models/reservation/reservation.model';
import { ReservationService } from 'src/app/services/reservation.service';
import { Router } from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];
  reservationToDelete: Reservation | null = null;
  constructor(private router: Router,
    private reservationService: ReservationService) { }

  ngOnInit(): void {
    this.getReservations();
  }

  getReservations(): void {
    this.reservationService.getAllReservations()
    .subscribe((data: Reservation[]) => {
      this.reservations = data;
  });
}
deleteReservation(reservation: Reservation): void {
  if (reservation && reservation.idRes !== undefined) {
    const reservationId = reservation.idRes;
    this.reservationService.deleteReservation(reservationId).subscribe(() => {
      this.getReservations();
      $('#confirmDeleteModal').modal('hide');
    });
  }
}


editFeedback(reservation: Reservation): void {
  this.router.navigate(['../edit-feedback', reservation.idRes]);
}
}
