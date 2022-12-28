import { Component } from '@angular/core';
import { AuthenticationService } from './helpers/authentication.service';
import { UserRole } from './model/role';
import { User } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blood-donation';
  user: User;
  
  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.user.subscribe(x => this.user = x);
}

get isAdmin() {
    return this.user && this.user.userRole === UserRole.Admin;
}

get isLogedIn(){
  return this.authenticationService.userValue;
}

logout() {
    this.authenticationService.logout();
}
}
