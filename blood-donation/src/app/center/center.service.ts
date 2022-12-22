import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MedicalCenterDTO } from '../model/medicalCenterDTO';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CenterService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public getCenters(): Observable<MedicalCenterDTO[]>{
    return this.http.get<MedicalCenterDTO[]>(`${this.apiServerUrl}/center`);
  }

  public getCenter(centerId: number){
    return this.http.get<MedicalCenterDTO>(`${this.apiServerUrl}/center/${centerId}`);
  }
}
