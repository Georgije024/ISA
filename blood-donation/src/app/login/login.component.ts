import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router } from '@angular/router';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import { LoginService } from './login.service';

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

  constructor(private http: HttpClient, private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {

  }

  login(event: any) {
    event.preventDefault();
    this.loginService.login(this.username, this.password).subscribe((data: any) => {
      this.router.navigate(['home']);
      this.invalidLogin = false;
    }, error => {
      console.log(error);
      this.invalidLogin = true;
    });
  }

}
