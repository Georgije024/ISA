import { Component, OnInit } from '@angular/core';
import { Center } from '../model/medicalCenter';
import { CenterService } from './center.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  centers: Center[] = [];

  constructor(private service: CenterService) { }

  ngOnInit(): void {
    this.getCenters();
  }

  getCenters(){
    this.service.getCenters().subscribe(
      (response: Center[]) => {
        this.centers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
