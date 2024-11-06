import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sidebarVisible: boolean = false;

  constructor(private router: Router){}

  logout(){
    this.router.navigate(['/login']);
    console.log("Logged Out Successfully!!");
  }
 
}
