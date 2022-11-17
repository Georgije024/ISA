import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/User';
import { RegistrationserviceService } from './registrationservice.service';
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup;
  alert: boolean = false;
  
  constructor(private registrationService: RegistrationserviceService,
        private formBuilder: FormBuilder,
        private router: Router,) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      phoneNumber: ['', Validators.required],
      jmbg: ['', Validators.required],
      job: ['', Validators.required],
      biography: ['', Validators.required],
      gender: ['', Validators.required]
  });
  }


  onSubmit(){
    if (this.registerForm.invalid) {
      this.alert = true;  
      return;
    }

    this.registrationService.registerUser(this.registerForm.value).subscribe(
      (response: User) => {
        //this.user = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );


  }
}
