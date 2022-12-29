import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentsService } from '../appointments/appointments.service';
import { ComplaintComponent } from '../complaint/complaint.component';
import { AuthenticationService } from '../helpers/authentication.service';
import { Appointment } from '../model/appointment';
import { Complaint } from '../model/Complaint';
import { ComplaintUserService } from './complaint-user.service';

@Component({
  selector: 'app-complaint-user',
  templateUrl: './complaint-user.component.html',
  styleUrls: ['./complaint-user.component.css']
})
export class ComplaintUserComponent implements OnInit {
  appointmentId: number = -1;
  appointment: Appointment;
  alert: boolean = false;
  zalba = "";

  constructor(private router: Router,private route: ActivatedRoute, private compservice: ComplaintUserService,private appService: AppointmentsService, private auth: AuthenticationService) { }

  ngOnInit(): void {
    this.appointmentId=  Number(this.route.snapshot.queryParamMap.get('appointmentId'));
    this.getAppointment();
  }


  public getAppointment(): void {
    this.compservice.getAppointment(this.appointmentId).subscribe(
      (response: Appointment) => {
        this.appointment = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  checkStatus(){
  const date = new Date()
  if(new Date(String(this.appointment.date)).getTime() < date.getTime()){
   return true;
  }

  date.setHours(date.getHours() +24);
  if(new Date(String(this.appointment.date)).getTime() < date.getTime()){
   return true;
  }
  return false;
}

checkStatusZalba(){
  const date = new Date()
  if(new Date(String(this.appointment.date)).getTime() < date.getTime()){
   return true;
  }
  return false;
}

  cancelAppointment(){
    this.appService.cancelApointment(this.appointment.id).subscribe();
  }

  makeComplaint(){
    console.log((<HTMLInputElement>document.getElementById("message")).value)
    const complaint: Complaint ={
      user: this.auth.userValue.id,
      text: "Zalba za:" +this.zalba+": " +(<HTMLInputElement>document.getElementById("message")).value
    }
    
    this.appService.makeComplaint(complaint).subscribe();
  }

  ChangingValue(event: Event){
    this.zalba = event.toString();
  }
}
