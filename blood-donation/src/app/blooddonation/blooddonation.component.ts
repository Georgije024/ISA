import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlooddonationserviceService } from './blooddonationservice.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Center } from '../model/medicalCenter';
import { Appointment } from '../model/appointment';


@Component({
  selector: 'app-blooddonation',
  templateUrl: './blooddonation.component.html',
  styleUrls: ['./blooddonation.component.css']
})
export class BlooddonationComponent implements OnInit {
  days: String[]= [];
  appointments: Appointment[] = [];
  center?: Center;
  appointmentsFiltered: Appointment[] = [];

  constructor(private bloodDonationService: BlooddonationserviceService,private route: ActivatedRoute) { }

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
    this.bloodDonationService.getAvaliableAppointments(1).subscribe(
      (response: Appointment[]) => {
        this.appointments = this.filterAppointments(response,event);
        console.log(this.appointments)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  filterAppointments(app: Appointment[],  event: Event) {
    console.log(event)
    const [day, month, year] = String(event).split('/');
    const startDate = new Date(+year, +month - 1, +day);
    const endDate = new Date(+year, +month - 1, +day+1);

    this.appointmentsFiltered = [];


    for (let i = 0; i < app.length; i++) {
      const aa = new Date(String(app[i].date)).getTime();
      if(aa > startDate.getTime() && aa < endDate.getTime()){
        this.appointmentsFiltered.push(app[i]);
      }
    }
    
    return this.appointmentsFiltered;
  }

  onClick(event: Appointment) {
    this.bloodDonationService.takeAppointment(event.id,1).subscribe();
  }
}
