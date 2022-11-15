import { Component, OnInit } from '@angular/core';
import { MedicalCenter } from '../model/medicalCenter';
import { HttpErrorResponse } from '@angular/common/http';
import { MedicalcenterService } from './medicalcenter.service';

@Component({
  selector: 'app-medicalcenter',
  templateUrl: './medicalcenter.component.html',
  styleUrls: ['./medicalcenter.component.css']
})
export class MedicalcenterComponent implements OnInit {
  medicalCenters: MedicalCenter[] = [];

  constructor(private medicalCenterService: MedicalcenterService) { }

  ngOnInit(): void {
  }

  public getCenters(): void {
    this.medicalCenterService.getCenters().subscribe(
      (response: MedicalCenter[]) => {
        this.medicalCenters = response;
        console.log(response)
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
