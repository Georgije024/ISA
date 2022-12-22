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
      return this.http.post<User>(`${this.apiServerUrl}/user/register`,user);
  }
  
  public getUser(userId: number){
    return this.http.get<User>(`${this.apiServerUrl}/user/${userId}`);
  }
}
