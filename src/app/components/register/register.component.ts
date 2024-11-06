import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { ModalpopupComponent } from '../modalpopup/modalpopup.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  errorMessage: string = '';
  flag: boolean = true;

  registerForm : FormGroup  = new FormGroup({});

constructor(private formbuilder: FormBuilder, 
            private authService: AuthService, 
            private httpClient: HttpClient,
            private router: Router,
            private dialogRef: MatDialog){}


  ngOnInit(): void {
    
    this.registerForm = this.formbuilder.group({
      firstname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      lastname: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]],
      //['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], 
      location: ['', [Validators.required,Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
      department: ['', Validators.required],
      roles: ['', Validators.required]
    
    });
  }

get firstname (){
  return this.registerForm.controls['firstname'];
}

get lastname (){
  return this.registerForm.controls['lastname'];
}

get email() {
  return this.registerForm.controls['email'];
}

get password() {
  return this.registerForm.controls['password'];
}

get phoneNumber (){
  return this.registerForm.controls['phoneNumber'];
}

get location (){
  return this.registerForm.controls['location'];
}

get department (){
  return this.registerForm.controls['department'];
}

get roles (){
  return this.registerForm.controls['roles'];
}


onSubmit() {
  if (this.registerForm.valid) {
    this.authService.register(this.registerForm.value).subscribe(
      (response) => {
        console.log('Registration successful:', response);
        
        // this.openDialog();

        this.registerForm.reset();
        // this.router.navigate(['/home'])
        // Optionally, we can redirect the user to another page or show a success message
      },
      (error: { error: { message: string; }; }) => {
        console.error('Registration failed:', error);
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = 'An error occurred while registering. Please try again later.';
        }
      }
    );
  } else {
    this.errorMessage = 'Please fill out all required fields correctly.';
  }
  
}

// onSubmit() {
// this.httpClient.post<any>('http://localhost:8080/test', {id: 100, name: 'TestDeptartpmentfrom front end'}).subscribe({
//   next: (res) => console.log(res)

  
// })
// }

openDialog(){
  this.dialogRef.open(ModalpopupComponent)
}


}




