import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlooddonationserviceService } from '../blooddonation/blooddonationservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bloodDonationService: BlooddonationserviceService) { }

  ngOnInit(): void {
  }

  public createAppointments(): void {
    this.bloodDonationService.createAppointments().subscribe();
  }

}
