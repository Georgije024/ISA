import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MedicalCenter } from '../model/medicalCenter';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicalcenterService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public getCenters(): Observable<MedicalCenter[]> {
    return this.http.get<MedicalCenter[]>(`${this.apiServerUrl}/center`);
  }
}
