import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private apiServerUrl = environment.apiBaseurl;

  constructor(private http: HttpClient) { }

  public surveySubmit(userId: number) {
    return this.http.get<User>(`${this.apiServerUrl}/user/survey/${userId}`);
  }
}
