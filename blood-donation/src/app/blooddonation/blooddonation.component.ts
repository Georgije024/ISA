import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BlooddonationserviceService } from './blooddonationservice.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Center } from '../model/medicalCenter';
import { Appointment } from '../model/appointment';
import { CenterService } from '../center/center.service';
import { RegistrationserviceService } from '../registration/registrationservice.service';
import { User } from '../model/User';


@Component({
  selector: 'app-blooddonation',
  templateUrl: './blooddonation.component.html',
  styleUrls: ['./blooddonation.component.css']
})
export class BlooddonationComponent implements OnInit {
  days: String[]= [];
  appointments: Appointment[] = [];
  center: Center;
  user: User;
  appointmentsFiltered: Appointment[] = [];
  centerId: number = -1;
  alert: boolean = false;

  constructor(private bloodDonationService: BlooddonationserviceService,private route: ActivatedRoute, private centerService: CenterService,private regService: RegistrationserviceService) { }

  ngOnInit(): void {
    this.centerId=  Number(this.route.snapshot.queryParamMap.get('centerId'));
    this.getCenter();
    this.getUser();
    this.getDays();
  }
  getUser() {
    this.regService.getUser(1).subscribe(
      (response: User) => {
        this.user = response;
        if(this.user.survey==false)
          this.alert=true;
          const date = new Date()
          date.setMonth(date.getMonth() -6)
        if(new Date(String(this.user.bloodDonationDate)).getTime() > date.getTime())
          this.alert=true;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
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

  public getCenter(): void {
    this.centerService.getCenter(this.centerId).subscribe(
      (response: Center) => {
        this.center = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  ChangingValue(event: Event){
    this.bloodDonationService.getAvaliableAppointments(this.centerId).subscribe(
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
    console.log('aaaa')
    this.bloodDonationService.takeAppointment(event.id,this.user.id).subscribe();
  }
}