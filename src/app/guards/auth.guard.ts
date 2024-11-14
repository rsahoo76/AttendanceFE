
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export class AuthGuard implements CanActivate {
  constructor(private authervicie: AuthService,
              private router: Router) {}
  canActivate(): boolean {
    if (this.authervicie.isLoggedIn()) {
      return true; //access to route will be allowed when true
    } else {
      // Redirect to the login page
      this.router.navigate(['/login']);
      return false;
    }
  }
}


