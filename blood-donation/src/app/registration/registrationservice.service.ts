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

  registerUser(user: User): Observable<Object> {
    console.log(user)
      return this.http.post(`${this.apiServerUrl}/user/register`,user);
  }
  
}
