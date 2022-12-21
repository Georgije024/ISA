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
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private registrationService: RegistrationserviceService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      jmbg: ['', Validators.required],
      job: ['', Validators.required],
      biography: ['', Validators.required],
      
  });
  }

  get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }

        this.registrationService.registerUser(this.registerForm.value).subscribe(data=>{
        },error=>alert("Neuspesna registracija"))
    }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}


