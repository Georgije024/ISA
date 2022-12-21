import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from '../model/appointment';

@Injectable({
  providedIn: 'root'
})
export class BlooddonationserviceService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public getBloodDonationDays(): Observable<String[]>{
    return this.http.get<String[]>(`${this.apiServerUrl}/blood`);
  }

  public getAvaliableAppointments(centerId: number): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.apiServerUrl}/blood/appointments/${centerId}`);
  }

  public createAppointments(){
    return this.http.post(`${this.apiServerUrl}/blood/createAppointments`,null);
  }

  public takeAppointment(appointmentId: number, userId: number){
    return this.http.post(`${this.apiServerUrl}/blood/takeAppointment/${appointmentId}/${userId}`,null);
  }
}
