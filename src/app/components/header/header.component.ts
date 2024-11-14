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


  logout() {
    const confirmLogout = confirm('Are you sure you want to logout?');
    if (confirmLogout) {

      sessionStorage.clear();
      
        this.router.navigate(['/login']);
        console.log("Logged Out Successfully!!");
        alert('Logged Out Successfully!!');
    } else {
        console.log("Logout cancelled");
    }
}
 
}
