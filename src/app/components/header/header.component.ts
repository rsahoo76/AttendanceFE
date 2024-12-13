import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sidebarVisible: boolean = false;
  sidebarOpen: boolean = false;
  user!: any;
  UserData:  any;


  constructor(private router: Router,
    private authservice: AuthService
  ){}

  ngOnInit(): void {
  this.authservice.getLoggedUser().subscribe(
    (data: any) => {
      this.user = data,
      this.SetUserData(this.user),
        (err: any) => console.error(err)
    },
    (error: any) => {
      console.error('Error fetching user data', error);
    }
  );
  }

  SetUserData(user1: any){
    this.UserData = user1;
  }

  public toggleSidebar() {
    if ($('.sidebar').css('left') == "-200px") {
      this.sidebarOpen = true;
      $('.sidebar').css('left', 0);
      $('.sidebar').css('box-shadow', '5px 5px 2px #e6e6e6aa');
    } else {
      this.sidebarOpen = false;
      $('.sidebar').css('left', '-200px');
      $('.sidebar').css('box-shadow', 'none');
    }
  }

  hasRole(){

    let role = null;
    if (this.UserData) {
      role = this.UserData.roles.name;
      if(role == 'teacher' || role == 'admin'){
        return true;
      }
}
return false;
}

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
