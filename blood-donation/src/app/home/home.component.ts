import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { BlooddonationserviceService } from '../blooddonation/blooddonationservice.service';
import { User } from '../model/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private bloodDonationService: BlooddonationserviceService,private app: AppComponent) { }

  ngOnInit(): void {
  }

  public createAppointments(): void {
    this.bloodDonationService.createAppointments().subscribe();
  }
  get isAdmin() {
    return this.app.isAdmin;
  }

  get isLogedIn(){
    if(this.app.isLogedIn.id === undefined){
      return false;
    }
    return true;
  }
}
