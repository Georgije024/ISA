import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class RegistrationserviceService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public registerUser(user: User): Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/user/register`,user);
  }
}
