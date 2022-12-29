import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../helpers/authentication.service';
import { Appointment } from '../model/appointment';
import { User } from '../model/User';
import { RegistrationserviceService } from '../registration/registrationservice.service';
import { AppointmentsService } from './appointments.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {
  user: User;
  appointments: Appointment[];
  enableButton: boolean = false;
  appointment: Appointment;
  alert: boolean = false;
  
  constructor(private regService: RegistrationserviceService, private appService: AppointmentsService, private router: Router, private auth : AuthenticationService) { }

  ngOnInit(): void {
    this.getUser();
    console.log(this.appointments)
  }

  getUser() {
    this.regService.getUser(this.auth.userValue.id).subscribe(
      (response: User) => {
        this.user = response;
        this.getAppointments();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  getAppointments() {
    this.appService.getBloodDonationDays(this.user.id).subscribe(
      (response: Appointment[]) => {
        this.appointments = response;
        console.log(this.appointments)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  checkStatus(app: Appointment){
    const date = new Date()
    if(new Date(String(app.date)).getTime() < date.getTime()){
      return true;
    }
    return false;
  }

  // clickedAppointment(appointment: Appointment){
  //   this.appointment = appointment;
  //   this.enableButton=true;  
  // }

  clickedAppointment(appointment: Appointment){
    this.router.navigate(['/complaintUser'], {queryParams:{appointmentId: appointment.id}});
  }

  
  cancelAppointment(){
    const date = new Date()
    if(new Date(String(this.appointment.date)).getTime() < date.getTime()){
      this.alert = true;
     return;
    }

    date.setHours(date.getHours() +24);
    if(new Date(String(this.appointment.date)).getTime() < date.getTime()){
      this.alert = true;
     return;
    }
    
    this.appService.cancelApointment(this.appointment.id).subscribe();
  }

}
