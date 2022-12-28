import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit(): void {
  }

  get isAdmin() {
    return this.app.isAdmin;
  }

  get isLogedIn(){
    console.log(this.app.isLogedIn.id)
    if(this.app.isLogedIn.id === undefined){
      return false;
    }
    return true;
  }

  logout(){
    this.app.logout();
  }
}
