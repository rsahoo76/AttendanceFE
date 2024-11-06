import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { MatDialogModule } from '@angular/material/dialog';
import { ModalpopupComponent } from './components/modalpopup/modalpopup.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { StudentComponent } from './components/student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';

// import { MatDialog } from '@angular/material/dialog';
// import { MatDialogActions } from '@angular/material/dialog';
// import { MatDialogClose } from '@angular/material/dialog';
// import { MatDialogContent } from '@angular/material/dialog';
// import { MatDialogTitle } from '@angular/material/dialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import { EditEventDialogComponent } from './components/edit-event-dialog/edit-event-dialog.component';

import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TeacherComponent } from './components/teacher/teacher.component';

import { Interceptor1 } from './interceptor/interceptor.interceptor';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableModule } from 'primeng/table';
import { FloatLabelModule } from "primeng/floatlabel"  

import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { Tooltip } from 'primeng/tooltip';

// FullCalendarModule.registerPlugins([
//   interactionPlugin,
//   dayGridPlugin,
//   timeGrigPlugin
// ])


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ModalpopupComponent,
    StudentComponent,
    HeaderComponent,
    EditEventDialogComponent,
    TeacherComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDialogModule,
    MatToolbarModule,
    MatListModule ,
    MatSidenavModule,
    MatExpansionModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FullCalendarModule,
    // MatDialog,
    // MatDialogActions,
    // MatDialogClose,
    // MatDialogContent,
    // MatDialogTitle
    FormsModule,
    MatRadioModule,
    MatSnackBarModule,
    TableModule,
    FloatLabelModule,
    SidebarModule,
    ButtonModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor1,
      multi: true
    },
    provideHttpClient(withFetch()),
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
