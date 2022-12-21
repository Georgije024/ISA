import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlooddonationserviceService } from './blooddonationservice.service';

@Component({
  selector: 'app-blooddonation',
  templateUrl: './blooddonation.component.html',
  styleUrls: ['./blooddonation.component.css']
})
export class BlooddonationComponent implements OnInit {
  days: String[]= [];
  
  constructor(private bloodDonationService: BlooddonationserviceService) { }

  ngOnInit(): void {
    this.getDays();
  }

  public getDays(): void {
    this.bloodDonationService.getBloodDonationDays().subscribe(
      (response: String[]) => {
        this.days = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ChangingValue(event: Event){
    console.log(event)
  }
}
