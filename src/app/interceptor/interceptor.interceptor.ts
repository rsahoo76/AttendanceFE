// import { HttpInterceptorFn } from '@angular/common/http';
// export const interceptorInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };

import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import { User } from '../user'; 

@Injectable()
export class Interceptor1 implements HttpInterceptor {

  user = new User();
  constructor(private router: Router) {}

  /*
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();
    if(sessionStorage.getItem('userdetails')){
      this.user = JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if(this.user && this.user.password && this.user.email){
      httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(this.user.email + ':' + this.user.password));
    }else {
      let authorization = sessionStorage.getItem('Authorization');
      if(authorization){
        httpHeaders = httpHeaders.append('Authorization', authorization); 
      }
    }
    // let xsrf = sessionStorage.getItem('XSRF-TOKEN');
    // if(xsrf){
    //   httpHeaders = httpHeaders.append('X-XSRF-TOKEN', xsrf);  
    // }
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });
  return next.handle(xhr).pipe(tap(
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status !== 401) {
            return;
          }
          this.router.navigate(['/login']);
        }
      }));
  }

  */

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();

    // Retrieve userdetails from sessionStorage
    let userdetails = sessionStorage.getItem('userdetails');
    if (userdetails) {
      let user = JSON.parse(userdetails);
      if (user.email && user.password) {
        // Basic authentication encoding
        httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(user.email + ':' + user.password));
      }
    }

    // Add common headers
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders,
      withCredentials: true // Ensure cookies are sent with each request
    });

    // Handle unauthorized errors
    return next.handle(xhr).pipe(tap(
      () => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
    ));
  }

}







/*
// LoginComponent.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Simulate login success
    if (this.email && this.password) {
      let user = {
        email: this.email,
        password: this.password
      };

      // Store user details in sessionStorage
      sessionStorage.setItem('userdetails', JSON.stringify(user));  

      // Redirect to the dashboard or other secured page
      this.router.navigate(['/dashboard']);
    }
  }
}

// Usage in Interceptor (AuthInterceptorService)
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let httpHeaders = new HttpHeaders();

    // Retrieve userdetails from sessionStorage
    let userdetails = sessionStorage.getItem('userdetails');
    if (userdetails) {
      let user = JSON.parse(userdetails);
      if (user.email && user.password) {
        // Basic authentication encoding
        httpHeaders = httpHeaders.append('Authorization', 'Basic ' + window.btoa(user.email + ':' + user.password));
      }
    }

    // Add common headers
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = req.clone({
      headers: httpHeaders
    });

    // Handle unauthorized errors
    return next.handle(xhr).pipe(tap(
      () => {},
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
    ));
  }
}


*/
