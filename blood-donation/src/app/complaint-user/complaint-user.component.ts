import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-complaint-user',
  templateUrl: './complaint-user.component.html',
  styleUrls: ['./complaint-user.component.css']
})
export class ComplaintUserComponent implements OnInit {
  appointmentId: number = -1;
  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.appointmentId=  Number(this.route.snapshot.queryParamMap.get('appointmentId'));
    
  }

}
