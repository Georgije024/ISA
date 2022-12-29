import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';
import { Complaint } from '../model/Complaint';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {


  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public getBloodDonationDays(userId: number): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.apiServerUrl}/blood/${userId}`);
  }


  public cancelApointment(appId: number){
    return this.http.post(`${this.apiServerUrl}/blood/cancelAppointment/${appId}`,null);
  }

  
  
  makeComplaint(complaint: Complaint) {
    return this.http.post(`${this.apiServerUrl}/blood/makeComplaint}`,complaint);
  }
  
}
