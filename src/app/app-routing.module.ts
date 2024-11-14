import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { homedir } from 'os';
import { StudentComponent } from './components/student/student.component';
import { HeaderComponent } from './components/header/header.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path : '', component : LoginComponent
  },
  
  // {
  //   path : '', redirectTo : 'home', pathMatch : 'full'
  // }
  // ,
  {
    path : 'login', component : LoginComponent
  },
  {
    path : 'register', component : RegisterComponent
  },
  {
    path : 'home', component : HomeComponent
  },
  {
    path : 'student', component : StudentComponent
  },
  {
    path : 'header', component : HeaderComponent, canActivate: [AuthGuard]
  },
  {
    path : 'teacher', component : TeacherComponent
  },
  {
    path : 'dashboard', component : DashboardComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
