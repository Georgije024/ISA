import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { ActivatedRoute, Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { LoginService } from './login.service';
import jwt_decode from 'jwt-decode';
import { AuthenticationService } from '../helpers/authentication.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {} as User;
  username: string = '';
  password: string = '';
  invalidLogin: boolean = false;
  public token: string = '';
  public role: string = '';
  public id: string = '';

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {

  }

  login(event: any) {
    // this.loginService.login(this.username,this.password).subscribe(
    //   (response: any) => {
    //       this.token = response;
    //       localStorage.setItem('token', this.token);
    //       const tokenInfo = this.getDecodedAccessToken(this.token); // decode token
    //       this.role = tokenInfo.role
    //       localStorage.setItem('loggedUserRole', this.role);
    //       this.id = tokenInfo.id;
    //       localStorage.setItem('loggedUserId', this.id);
    //       this.router.navigate(['/home']);
    //   },
    //   (error) => {
    //     this.invalidLogin = true;
    //     console.log(error.message);
    //   }
    // );
    this.authenticationService.login(this.username, this.password)
    .pipe(first())
    .subscribe({
        next: () => {
            // get return url from query parameters or default to home page
            console.log("a")
            const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          console.log(error.message);
        }
    });
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

}
