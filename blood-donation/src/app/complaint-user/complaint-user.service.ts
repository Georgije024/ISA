import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../model/appointment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplaintUserService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public getAppointment(appointmentId: number){
    return this.http.get<Appointment>(`${this.apiServerUrl}/center/appointment/${appointmentId}`);
  }
}
