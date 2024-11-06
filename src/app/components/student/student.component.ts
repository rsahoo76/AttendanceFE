// import { Component } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'; // for dateclick
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Calendar } from '../../calendar';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent implements OnInit{

  calendar: Calendar[] = [];

  constructor(private authservice: AuthService){}

  /*
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    weekends: false, // initial value
    
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.handleDateClick(arg)
    ,
    // events: [
    //   { title: 'event 1', date: '2019-04-01' },
    //   { title: 'event 2', date: '2019-04-02' }
    // ]

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay' // user can switch between the two
      // right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
  };
  handleDateClick(arg: DateClickArg) {
    alert('date click! ' + arg.dateStr)
  }
  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
  }
*/

ngOnInit(): void {
  this.authservice.getCalendar().subscribe({
    next: (data : any) => {
      this.calendar = data;
    },
    error: (error: HttpErrorResponse) => {
      console.error('There was an error!', error);
    }
  });
}

}
