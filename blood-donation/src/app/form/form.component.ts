import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../helpers/authentication.service';
import { User } from '../model/User';
import { RegistrationserviceService } from '../registration/registrationservice.service';
import { FormService } from './form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user? : User;
  survey: boolean = false;

  constructor(private formService: FormService, private regService: RegistrationserviceService, private auth : AuthenticationService) { }

  ngOnInit(): void {
    this.regService.getUser(this.auth.userValue.id).subscribe(
      (response: User) => {
        this.user = response;
        console.log(this.user)
        if(this.user.survey)
          this.survey = true;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  submit(){
      this.formService.surveySubmit(this.user.id).subscribe(
        (response: User) => {
          this.user = response;
          this.survey = true;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
  }
}
