import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MedicalcenterComponent } from './medicalcenter/medicalcenter.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'medicalCenter', component: MedicalcenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
