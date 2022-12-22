import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginUser } from '../model/loginUser';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient, private router: Router) { }


  public login(username: string, pass: string) {
    const loginUser: LoginUser = {
      email: username,
      password: pass,
    };
    return this.http.post(`${this.apiServerUrl}/user/login`,loginUser);
  }

}
