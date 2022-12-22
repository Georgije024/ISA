import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private formService: FormService, private regService: RegistrationserviceService) { }

  ngOnInit(): void {
    this.regService.getUser(1).subscribe(
      (response: User) => {
        this.user = response;
        if(this.user.survey)
          this.survey = true;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  submit(){
      this.formService.surveySubmit(1).subscribe(
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
