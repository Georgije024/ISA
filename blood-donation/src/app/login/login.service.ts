import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginUser } from '../model/loginUser';
import { User } from '../model/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient, private router: Router) { }


  public checkUser(username: string, pass: string) {
    const loginUser: LoginUser = {
      email: username,
      password: pass,
    };
    return this.http.post<User>(`${this.apiServerUrl}/user/login`,loginUser);
  }

}
