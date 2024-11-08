
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../login-response/login-response';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
[x: string]: any;
  
  showPasswordRequirements: boolean = false;
  loginForm: FormGroup = new FormGroup({});
  errorMessage: string = '';
  message!: string;
  showErrorMessage: boolean = false;


  constructor(private formbuilder: FormBuilder,
              private router: Router,
              private authService: AuthService) {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required, 
        Validators.minLength(8), 
        Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')
      ]]
    });
  }

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }

  onPasswordFocus() {
    this.showPasswordRequirements = true;
  }

  onPasswordBlur() {
    this.showPasswordRequirements = true;
  }

  onPasswordInput() {
    this.showPasswordRequirements = !this.password.valid  // true;
  }


onSubmit() {
  if(this.loginForm.valid){
  const { email, password} = this.loginForm.value;
  // const password = this.loginForm.value;

  let user = { email, password};
  sessionStorage.setItem('userdetails', JSON.stringify(user));


  this.authService.login(email,password).subscribe(
    (response: any) => {
      if (response.success) {
        // alert(response.message)
        console.log(response.message);

        // Navigate to the home page or another route after successful login
        this.router.navigate(['/home']);
      } 
      else {
        this.errorMessage = response.message;
        alert(response.message)

      }
    },
    (error) => {
      this.errorMessage = 'Login failed. Something went wrong! Please try again.';
      alert(this.errorMessage);
    }
  );
  
 }

}

validateFormData() {
  if (!this.loginForm.get('email')?.value || !this.loginForm.get('password')?.value) {
    // this.showErrorMessage = true;  
    alert(' Please fill email and password.')
  } else {
    this.showErrorMessage = false;
    console.log('Login successful');
  }
}

}


