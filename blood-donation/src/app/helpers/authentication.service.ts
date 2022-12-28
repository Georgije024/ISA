import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/User';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import { Address } from '../model/address';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;
    private apiServerUrl = environment.apiBaseurl;
    headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
      });

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')|| '{}'));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(email: string, password: string) {
        return this.http.post(`${this.apiServerUrl}/user/authenticate`, { email, password }, 
            {headers: this.headers, responseType: 'text'})
            .pipe(map(token => {
                const tokenInfo = this.getDecodedAccessToken(token); // decode token
                const address: Address = {
                    name: '',
                    numberAddress: 0,
                    city: '',
                    country: ''
                }

                const user: User = {
                    id: tokenInfo.id,
                    email: email,
                    password: password,
                    name: '',
                    surname: '',
                    address: address,
                    phoneNumber: '',
                    jmbg: '',
                    gender: 0,
                    job: '',
                    biography: '',
                    survey: false,
                    bloodDonationDate: new Date,
                    userRole: tokenInfo.role,
                    appointments: [],
                    token: token
                }
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }



    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('user');
        this.userSubject.next(null);
        window.location.reload()
    }

    getDecodedAccessToken(token: string): any {
        try {
          return jwt_decode(token);
        } catch(Error) {
          return null;
        }
      }
}