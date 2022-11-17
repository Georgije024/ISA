import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationserviceService } from './registrationservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  
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
  });
  }


  onSubmit(){
    console.log(this.registerForm)
    this.submitted = true;
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.registrationService.registerUser(this.registerForm.value).subscribe();
  }
}
