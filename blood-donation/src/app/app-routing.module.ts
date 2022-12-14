import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsComponent } from './appointments/appointments.component';
import { BlooddonationComponent } from './blooddonation/blooddonation.component';
import { CenterComponent } from './center/center.component';
import { ComplaintUserComponent } from './complaint-user/complaint-user.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { FormComponent } from './form/form.component';
import { AuthGuard } from './helpers/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserRole } from './model/role';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'center', component: CenterComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'form', component: FormComponent,canActivate: [AuthGuard],data: { roles: [UserRole.Admin]}},
  {path: 'donation', component: BlooddonationComponent,canActivate: [AuthGuard],data: { roles: [UserRole.Admin]}},
  {path: 'login', component: LoginComponent},
  {path: 'appointments', component: AppointmentsComponent,canActivate: [AuthGuard],data: { roles: [UserRole.Admin]}},
  {path: 'complaint', component:ComplaintComponent, canActivate: [AuthGuard],data: { roles: [UserRole.User]}},
  {path: 'complaintUser', component:ComplaintUserComponent, canActivate: [AuthGuard],data: { roles: [UserRole.Admin]}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
