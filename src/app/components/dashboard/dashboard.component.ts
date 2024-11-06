import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Calendar } from '@fullcalendar/core';
import { Router } from 'express';
import { User } from '../../user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  approved : boolean = false;
  user: any;

  constructor( private authservice: AuthService) { }
// private router: Router,
  ngOnInit(): void {
    // to fetch users from authservice
    this.authservice.getLoggedUser().subscribe(
      (data : any)=>{
       this.user = data,
        (err: any) => console.error(err)
      },
      (error: any) => {
        console.error('Error fetching user data', error);
      }
    );
  

    let userdetails = sessionStorage.getItem('userdetails');
    if (userdetails) {
      let user = JSON.parse(userdetails);
      if (user.email && user.password) {
          console.log("email",user.email);
      }else{
        console.log("Something went wrong!")
      }
    }
  }
  
}
