// import { Component } from '@angular/core';
// import { FormBuilder, Validators } from '@angular/forms';


// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrl: './login.component.css'
// })
// export class LoginComponent {
  
//   loginForm = this.formbuilder.group({
//     email: ['', [Validators.required,Validators.email]],
//     password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$')]]
//     //['', Validators.required]
//   });

//   constructor(private formbuilder: FormBuilder){}

//   get email() {
//     return this.loginForm.controls['email'];
//   }

//   get password() {
//     return this.loginForm.controls['password'];
//   }
  
//   // if(this.loginForm.valid){
//   //   console.log("Login Successful", this.loginForm.value);
//   // }
//   // else 
//   // {
//   //   console.log("Login Unsuccessful");
//   // }
// }


/*
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  loginForm = this.formbuilder.group({
    email: ['', [Validators.required,Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formbuilder: FormBuilder){}

  get email() {
    return this.loginForm.controls['email'];
  }

  get password() {
    return this.loginForm.controls['password'];
  }
  
}
*/




import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoginResponse } from '../../login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  showPasswordRequirements: boolean = false;
  loginForm: FormGroup = new FormGroup({});
  errorMessage: string = '';
  message!: string;

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
// @Bean issue 
    /*
  onSubmit() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe(
        response => {
          if (response.success) {
            console.log('Login Successful', response);
            this.router.navigate(['/home']);
          } else {
            this.errorMessage = 'Invalid login credentials';
          }
        },
        error => {
          console.error('Login error', error);
          this.errorMessage = 'An error occurred during login. Please try again.';
        }
      );
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }
*/

// onSubmit(){

// }

onSubmit() {
  if(this.loginForm.valid){
  const { email, password} = this.loginForm.value;
  // const password = this.loginForm.value;
  // console.log("Onsubmit called");

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


  // onSubmit() {
  //   if (this.loginForm.valid) {
  //     console.log('Login Succesful', this.loginForm.value);
  //     this.router.navigate(['/home']);
  //   } else {
  //     console.log('Invalid login Credentials');
  //   }
  // }
    

  //Security 1/08/24
  /*
  onSubmit() {
    const { email, password} = this.loginForm.value;
    this.authService.login(email, password).subscribe(
      (response: LoginResponse) => {
        this.message = response.message;
      },
      (error) => {
        this.message = error.error.message;
      }
    );
  }
  */

/*Working fine 
  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Succesful', this.loginForm.value);
      this.router.navigate(['/home']);
    } else {
      console.log('Invalid login Credentials');
    }
  }
*/


/*
onSubmit() {
  if (this.loginForm.valid) {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    // Assuming authService.login expects string parameters
    this.authService.login(email, password).subscribe(
      response => {
        if (response.success) {
          console.log('Login successful', response);
          // Handle successful login, e.g., navigate to a different page
        } else {
          this.errorMessage = response.message;
        }
      },
      error => {
        this.errorMessage = 'Login failed';
        console.error('Login failed', error);
      }
    );
  } else {
    this.errorMessage = 'Form is invalid';
  }
}
*/

/*
  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        if (response.success) {
          console.log('Login successful', response);
          // Handle successful login
        } else {
          this.errorMessage = response.message;
        }
      },
      error => {
        this.errorMessage = 'Login failed';
        console.error('Login failed', error);
      }
    );
  }

  

   login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Login successful', response);
        // Handle successful login
      },
      error => {
        this.errorMessage = 'Login failed';
        console.error('Login failed', error);
      }
    );
  }

  */
 

}

