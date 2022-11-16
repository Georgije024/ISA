import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterComponent } from './center/center.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'center', component: CenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
