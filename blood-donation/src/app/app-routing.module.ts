import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlooddonationComponent } from './blooddonation/blooddonation.component';
import { CenterComponent } from './center/center.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'center', component: CenterComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'form', component: FormComponent},
  {path: 'donation', component: BlooddonationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
