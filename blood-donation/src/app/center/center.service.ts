import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Center } from '../model/medicalCenter';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CenterService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public getCenters(): Observable<Center[]>{
    return this.http.get<Center[]>(`${this.apiServerUrl}/center`);
  }
}
