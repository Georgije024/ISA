import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlooddonationserviceService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public getBloodDonationDays(): Observable<String[]>{
    return this.http.get<String[]>(`${this.apiServerUrl}/blood`);
  }
}
