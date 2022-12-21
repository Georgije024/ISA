import { Component, OnInit } from '@angular/core';
import { Center } from '../model/medicalCenter';
import { CenterService } from './center.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit {
  centers: Center[] = [];
  sortValues: string[] = ['By City', 'By Name', 'By Rating Ascending','By Rating Descending'];

  constructor(private service: CenterService, private router: Router) { }

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

  clickedValue(sort: string){
    switch(sort) { 
      case 'By City': { 
        this.sortByCity();
         break; 
      } 
      case 'By Name': { 
        this.sortByName();
        break; 
     } 
      case 'By Rating Ascending': { 
         this.sortByRatingAscending();
         break; 
      } 
      case 'By Rating Descending': { 
         this.sortByRatingDescending();
         break; 
      } 
   } 
  }

  sortByCity(){
    this.centers.sort((a,b) => a.city > b.city ? 1:-1);
  }

  sortByName(){
    this.centers.sort((a,b) => a.name > b.name ? 1:-1);
  }

  sortByRatingAscending(){
    this.centers.sort((a,b) => a.rating-b.rating);
  }

  sortByRatingDescending(){
    this.centers.sort((a,b) => b.rating-a.rating);
  }

  clickedCenter(center: Center){
  }

}
