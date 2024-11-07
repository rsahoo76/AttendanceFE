// import { Component, ViewChild } from '@angular/core';
// import { Route } from '@angular/router';
// import { Router } from '@angular/router';
// import { AuthService } from '../../services/auth.service';
// // import { user } from '../../interfaces/auth';
// import { User } from '../../user';
// import $ from 'jquery';
// import { HttpErrorResponse } from '@angular/common/http';
// // import { MatDialog } from '@angular/material/dialog';
// import { FullCalendarComponent } from '@fullcalendar/angular';
// import { CalendarOptions, EventInput } from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction'; // for dateclick
// import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
// import timeGridPlugin from '@fullcalendar/timegrid'
// import rrulePlugin from '@fullcalendar/rrule';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.css'
// })
// export class HomeComponent {

//   // users!: User[];
//   users: User[] = [];
//   // allday!:  false;


//   @ViewChild('calendar') calendarComponent!: FullCalendarComponent;

//   constructor(private router: Router,
//               private authservice: AuthService){}


// ngOnInit(): void {

//   // this.authservice.getUsers().subscribe({
//       //   next: (data) => {
//       //     this.users = data;
//       //   },
//       //   error: (error: HttpErrorResponse) => {
//       //     console.error('There was an error!', error);
//       //   }
//       // });
// }

//   logout(){
//     this.router.navigate(['/login']);

//     console.log("Logged Out Successfully!!");
//     alert('Logged Out Successfully!!');
//   }

//   public sidebarOpen: boolean = false;

//    public sidebar: boolean = false;

//    public toggleSidebar() {
//     // alert('toggleSidebar clicked......');
//     if ($('.sidebar').css('left') == "-200px") {
//         this.sidebarOpen = true;
//         $('.sidebar').css('left', 0);
//         $('.sidebar').css('box-shadow', '5px 5px 2px #e6e6e6aa');
//     } else {
//         this.sidebarOpen = false;
//         $('.sidebar').css('left', '-200px');
//         $('.sidebar').css('box-shadow', 'none');
//     }
// }


// calendarOptions: CalendarOptions = {
//   // initialView: 'dayGridMonth',
//   initialView: 'timeGridWeek',
//   weekends: true, // initial value


//   plugins: [dayGridPlugin, interactionPlugin, resourceTimeGridPlugin,timeGridPlugin,rrulePlugin],
//   dateClick: (arg) => this.handleDateClick(arg),
//   // events: [
//   //   { title: 'event 1', date: '2019-04-01' },
//   //   { title: 'event 2', date: '2019-04-02' }
//   // ]
//  /* events: [
//     {
//       title: 'Maths',
//       start: '2024-06-17T09:00:00',
//       end: '2024-06-17T10:30:00'
//     }
//   ],*/
//   defaultAllDayEventDuration : 12,
//   navLinks: true,
//   nowIndicator: true,
//   timeZone: 'IST',
//   slotDuration: '00:30:00',
//   slotMaxTime: '24:00:00',
//   // scrollTime: '06:00:00',
//   headerToolbar: {
//     left: 'prev,next today',
//     center: 'title',
//     // right: 'dayGridMonth,dayGridWeek,dayGridDay' // user can switch between the two
//     // right: 'dayGridMonth,timeGridWeek,timeGridDay'

//     right: 'dayGridMonth,resourceTimeGridWeek,resourceTimeGridDay'
//   },
//   businessHours: [ // specify an array instead
//   {
//     daysOfWeek: [ 1, 2, 3, 4, 5 ], // Monday, Tuesday, Wednesday
//     startTime: '09:00', // 8am
//     endTime: '17:00' // 6pm
//   }
//   ],
//   // plugins: [timeGridPlugin],
//   // initialView: 'timeGridWeek',
//   // headerToolbar: {
//   //   left: 'prev,next',
//   //   center: 'title',
//   //   right: 'timeGridWeek,timeGridDay' // user can switch between the two
//   // }
//   views: {
//     timeGridFourDay: {
//       type: 'timeGrid',
//       duration: { hour : 9 }
//     }
//   },

//   resources: [
//     {
//       // title: 'Math Class',
//       // start: '2024-06-17T09:00:00',
//       // end: '2024-06-17T10:30:00'
//      }
//     //,
//     // {
//     //   title: 'Physics Class',
//     //   start: '2024-06-17T11:00:00',
//     //   end: '2024-06-17T12:30:00'
//     // }
//   ],
//  /* */

//   events: [

//     /*
//     {
//       title: 'my recurring event',
//       rrule: {
//         freq: 'monthly',
//         interval: 12,
//         byweekday: [ 'mo', 'fr' ],
//         dtstart: '2024-01-01T90:00:00', // will also accept '20120201T103000'
//         until: '2024-12-31' // will also accept '20120201'
//       }
//     },*/
//     //Mon
//     {
//       title: 'Machine Learning',
//       start: '2024-06-17T09:00:00',
//       end: '2024-06-17T10:00:00'
//     },
//     {
//       title: 'Data Structures & Algorithm',
//       start: '2024-06-17T10:00:00',
//       end: '2024-06-17T11:00:00'
//     },
//     {
//       title: 'Design Pattern',
//       start: '2024-06-17T11:00:00',
//       end: '2024-06-17T12:00:00'
//     },
//     {
//       title: 'Internet of Things',
//       start: '2024-06-17T12:00:00',
//       end: '2024-06-17T13:00:00'
//     },
//     {
//       title: 'Lunch Break',
//       start: '2024-06-17T13:00:00',
//       end: '2024-06-17T14:00:00',
//       color: 'orange'
//     },
//     {
//       title: 'Operating System',
//       start: '2024-06-17T14:00:00',
//       end: '2024-06-17T15:00:00'
//     },
//     {
//       title: 'Artificial Intelligence',
//       start: '2024-06-17T15:00:00',
//       end: '2024-06-17T16:00:00'
//     },
//     {
//       title: 'Machine Learning',
//       start: '2024-06-17T16:00:00',
//       end: '2024-06-17T17:00:00'
//     },

//     //Tue
//     {
//       title: 'Internet of Things',
//       start: '2024-06-18T09:00:00',
//       end: '2024-06-18T10:00:00'
//     },
//     {
//       title: 'Machine Learning',
//       start: '2024-06-18T10:00:00',
//       end: '2024-06-18T11:00:00'
//     },
//     {
//       title: 'Data Structures & Algorithm',
//       start: '2024-06-18T11:00:00',
//       end: '2024-06-18T12:00:00'
//     },
//     {
//       title: 'Cyber Security',
//       start: '2024-06-18T12:00:00',
//       end: '2024-06-18T13:00:00'
//     },
//     {
//       title: 'Lunch Break',
//       start: '2024-06-18T13:00:00',
//       end: '2024-06-18T14:00:00',
//       color: 'orange'
//     },
//     {
//       title: 'Design Patterns',
//       start: '2024-06-18T14:00:00',
//       end: '2024-06-18T15:00:00'
//     },
//     {
//       title: 'Artificial Intelligence',
//       start: '2024-06-18T15:00:00',
//       end: '2024-06-18T16:00:00'
//     },
//     {
//       title: 'Operating System',
//       start: '2024-06-18T16:00:00',
//       end: '2024-06-18T17:00:00'
//      },

//     //Thu
//     {
//       title: 'Artificial Intelligence',
//       start: '2024-06-20T09:00:00',
//       end: '2024-06-20T10:00:00'
//     },
//     {
//       title: 'Internet of Things',
//       start: '2024-06-20T10:00:00',
//       end: '2024-06-20T11:00:00'
//     },
//     {
//       title: 'Data Structures & Algorithm',
//       start: '2024-06-20T11:00:00',
//       end: '2024-06-20T12:00:00'
//     },
//     {
//       title: 'Design Patterns',
//       start: '2024-06-20T12:00:00',
//       end: '2024-06-20T13:00:00'
//     },
//     {
//       title: 'Lunch Break',
//       start: '2024-06-20T13:00:00',
//       end: '2024-06-20T14:00:00',
//       color: 'orange'
//     },
//     {
//       title: 'Cyber Security',
//       start: '2024-06-20T14:00:00',
//       end: '2024-06-20T15:00:00'
//     },
//     {
//       title: 'Machine Learning',
//       start: '2024-06-20T15:00:00',
//       end: '2024-06-20T16:00:00'
//     },
//     {
//       title: 'Operating System',
//       start: '2024-06-20T16:00:00',
//       end: '2024-06-20T17:00:00'
//      },

//      //Fri
//      {
//       title: 'Internet of Things',
//       start: '2024-06-21T09:00:00',
//       end: '2024-06-21T10:00:00'
//     },
//     {
//       title: 'Machine Learning',
//       start: '2024-06-21T10:00:00',
//       end: '2024-06-21T11:00:00'
//     },
//     {
//       title: 'Operating System',
//       start: '2024-06-21T11:00:00',
//       end: '2024-06-21T12:00:00'
//      },
//      {
//       title: 'Data Structures & Algorithm',
//       start: '2024-06-21T12:00:00',
//       end: '2024-06-21T13:00:00'
//     },
//     {
//       title: 'Lunch Break',
//       start: '2024-06-21T13:00:00',
//       end: '2024-06-21T14:00:00',
//       color: 'orange'
//     },
//     {
//       title: 'Cyber Security',
//       start: '2024-06-21T14:00:00',
//       end: '2024-06-21T15:00:00'
//     },
//     {
//       title: 'Design Patterns',
//       start: '2024-06-21T15:00:00',
//       end: '2024-06-21T16:00:00'
//     },
//     {
//       title: 'Artificial Intelligence',
//       start: '2024-06-21T16:00:00',
//       end: '2024-06-21T17:00:00'
//     }


//   ],
//   // eventTimeFormat: { // like '14:30:00'
//     // hour: '2-digit',
//     // minute: '2-digit',
//     // second: '2-digit',
//     // meridiem: false
//   // },

// /* */

// slotLabelFormat: {
//   hour: 'numeric', 
//   // minute: '2-digit', 
//   omitZeroMinute: false, 
//   hour12: true 
// },

// //  eventTimeFormat: { hour: '2-digit', minute: '2-digit', hour12: false },


// //Recurring Events
// /* events: [
//   {
//     title: 'my recurring event',
//     rrule: {
//       freq: 'weekly',
//       // interval: 5,
//       byweekday: [ 'mo', 'tu', 'we','th', 'fr' ],
//       dtstart: '2024-05-01T10:30:00', // will also accept '20120201T103000'
//       until: '2024-06-30' // will also accept '20120201'
//     }
//   }
// ]
// */

// };




// /*
// calendarOptions: CalendarOptions = {
//   initialView: 'dayGridMonth',
//   weekends: true,
//   plugins: [dayGridPlugin, interactionPlugin, resourceTimeGridPlugin, timeGridPlugin],
//   dateClick: (arg) => this.handleDateClick(arg),
//   events: [
//     { id: '1', resourceId: '1', title: 'Math Class', start: '2024-06-17T09:00:00', end: '2024-06-17T10:30:00' },
//     { id: '2', resourceId: '2', title: 'Physics Class', start: '2024-06-17T11:00:00', end: '2024-06-17T12:30:00' }
//   ],
//   headerToolbar: {
//     left: 'prev,next today',
//     center: 'title',
//     right: 'dayGridMonth,resourceTimeGridWeek,resourceTimeGridDay'
//   },
//   resources: [
//     { id: '1', title: 'Math Room' },
//     { id: '2', title: 'Physics Lab' }
//   ]
// };

// */





// handleDateClick(arg: DateClickArg) {
//   alert('date click! ' + arg.dateStr)
// }

// toggleWeekends() {
//   this.calendarOptions.weekends = !this.calendarOptions.weekends // toggle the boolean!
// }

// someMethod() {
//   let calendarApi = this.calendarComponent.getApi();
//   calendarApi.next();
// }

// }




import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../user';
import $ from 'jquery';
import { HttpErrorResponse } from '@angular/common/http';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, EventInput, EventMountArg, EventSourceFuncArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import rrulePlugin from '@fullcalendar/rrule';
import { Calendar } from '../../calendar';
import { MatDialog } from '@angular/material/dialog';
import { EditEventDialogComponent } from '../edit-event-dialog/edit-event-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Attendance } from '../../attendance';
import { log } from 'node:console';
import { subscribe } from 'node:diagnostics_channel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  users: User[] = [];
  calendar: Calendar[] = [];
  // event! : any[];
  approved: boolean = false;
  user: any;
  title!: string;
  start!: string;
  end!: string;
  attendance: Attendance[] = [];
  eventDate!: string;
  attendanceData: any[] = [];  // Assuming attendance data is stored here
  StartStr: any[] = [];
  EndStr: any[] = [];
  MatchedDates: any [] = [];
  allDayDates: { [key: string]: boolean } = {}; 


  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  events: any;

  constructor(private router: Router,
    private authservice: AuthService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    // to fetch users from authservice
    this.authservice.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (error: HttpErrorResponse) => {
        console.error('There was an error!', error);
      }
    });

    this.authservice.getLoggedUser().subscribe(
      (data: any) => {
        this.user = data,
          (err: any) => console.error(err)
      },
      (error: any) => {
        console.error('Error fetching user data', error);
      }
    );

    //To fetch calendar details 
    this.authservice.getCalendar().subscribe({
      next: (data: any) => {
        this.calendar = data;
      },
      error: (error: HttpErrorResponse) => {
        console.error('There was an error!', error);
      }
    });


    this.fetchAttendanceData();

  }

  logout() {
    this.router.navigate(['/login']);
    console.log("Logged Out Successfully!!");
    alert('Logged Out Successfully!!');
  }

  public sidebarOpen: boolean = false;

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

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    aspectRatio: 2.5,
    weekends: true,
    plugins: [dayGridPlugin, interactionPlugin, resourceTimeGridPlugin, timeGridPlugin, rrulePlugin],
    dateClick: (arg) => this.handleDateClick(arg),
    defaultAllDayEventDuration: 12,
    navLinks: true,
    nowIndicator: true,
    timeZone: 'IST',
    firstDay: 1,
    slotDuration: '00:30:00',
    slotMinTime: '09:00:00',
    slotMaxTime: '18:00:00',
    defaultAllDay: false,
    eventDidMount: (arg) => this.onEventMounted(arg),
    // hiddenDays: [1],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,resourceTimeGridWeek,resourceTimeGridDay'
    },
    selectOverlap: true,
    businessHours: [
      {
        daysOfWeek: [1, 2, 3, 4, 5], // Monday to Friday
        startTime: '09:00',
        endTime: '21:00'
      }
    ],


    /* events:[
       this.moveCalendarToSlot(),
     ],*/
    /*
        events: [
          { 
            title: 'Machine Learning',
            rrule: {
                // freq: 'weekly',
                // interval: 5,
                // count: 5,
                // dtstart: parse("20240617T090000")
    
              freq: 'weekly',
              byweekday: ['mo', 'tu', 'th', 'fr'],
              dtstart: '2024-06-17T09:00:00',
              until: '2024--6-17T10:00:00'
            },
            
            duration: '01:00'
          },
          {
            title: 'Data Structures & Algorithm',
            rrule: {
              freq: 'weekly',
              byweekday: ['mo', 'tu', 'th', 'fr'],
              dtstart: '2024-06-17T10:00:00'
            },
            duration: '01:00'
          },
          {
            title: 'Design Pattern',
            rrule: {
              freq: 'weekly',
              byweekday: ['mo', 'tu', 'th', 'fr'],
              dtstart: '2024-06-17T11:00:00'
            },
            duration: '01:00'
          },
          {
            title: 'Internet of Things',
            rrule: {
              freq: 'weekly',
              byweekday: ['mo', 'tu', 'th', 'fr'],
              dtstart: '2024-06-17T12:00:00'
            },
            duration: '01:00'
          },
          {
            title: 'Lunch Break',
            rrule: {
              freq: 'weekly',
              byweekday: ['mo', 'tu', 'th', 'fr'],
              dtstart: '2024-06-17T13:00:00'
            },
            duration: '01:00',
            color: 'orange'
          },
          {
            title: 'Operating System',
            rrule: {
              freq: 'weekly',
              byweekday: ['mo', 'tu', 'th', 'fr'],
              dtstart: '2024-06-17T14:00:00'
            },
            duration: '01:00'
          },
          {
            title: 'Artificial Intelligence',
            rrule: {
              freq: 'weekly',
              byweekday: ['mo', 'tu', 'th', 'fr'],
              dtstart: '2024-06-17T15:00:00'
            },
            duration: '01:00'
          },
          {
            title: 'Cyber Security',
            rrule: {
              freq: 'weekly',
              byweekday: ['tu', 'th', 'fr'],
              dtstart: '2024-06-18T16:00:00'
            },
            duration: '01:00'
          }
        ],
    */

    //  No error is thrown but data is not visible on the screen     
        eventClick: this.handleEventClick.bind(this),
    eventSources: [
      {events: (info, successCallback, failureCallback) => this.fetchevents(info, successCallback, failureCallback),},

      {events: (info, successCallback, failureCallback) => this.fetchholidays(info, successCallback, failureCallback),}
    ],


    eventOverlap: true,

    // events: (info, successCallback, failureCallback) => this.fetchevents(info, successCallback, failureCallback),
    // eventClick: this.handleEventClick.bind(this),

    /*      
     eventSources:  [
        {
          events: (info, successCallback, failureCallback) => this.fetchevents(info, successCallback, failureCallback),
          // eventClick: this.handleEventClick.bind(this),
        },
        // {
        //   events: (info, successCallback, failureCallback) => this.fetchholidays(info, successCallback, failureCallback),
        //   // eventClick: this.handleEventClick.bind(this),
        // }
     ],
     eventClick: this.handleEventClick,
     */

    slotLabelFormat: {
      hour: 'numeric',
      hour12: true
    }
  };

  /*
  handleEventClick(arg: any) {
    const dialogRef = this.dialog.open(EditEventDialogComponent, {
      width: '250px',
      data: { event: arg.event }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        arg.event.setProp('title', result.title);
        arg.event.setStart('start',result.startTime);
        arg.event.setEnd('end',result.endTime);
      }
    });
  } 
  */

  handleEventClick(arg: any) {
    if (this.isTodayOrTomorrow(arg.event.start)) {
      const dialogRef = this.dialog.open(EditEventDialogComponent, {
        width: '400px',
        height: '400px',
        data: { event: arg.event }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          arg.event.setProp('title', result.title);
          arg.event.setStart(result.start);
          arg.event.setEnd(result.end);
          // arg.event.setAttended(result.attended);

          this.saveAttendance({
            // eventId: arg.event.id,
            title: result.title,
            start: result.start,
            end: result.end,
            attended: result.attended,
            notes: result.notes,
            userEmail: result.userEmail
            // user: result.user
          });
        }
      });
    } else {
      // alert('You can only edit events occurring today or Yesterday .');

      this.snackBar.open('You can only edit events scheduled for today or the day before today.', 'Close', {
        duration: 3000,
        verticalPosition: 'bottom'
      });

    }
  }

  isTodayOrTomorrow(date: any): boolean {
    const eventDate = new Date(date);
    const today = new Date();
    // const tomorrow = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    // tomorrow.setDate(today.getDate() + 1);

    return (
      eventDate.toDateString() === today.toDateString() ||
      // eventDate.toDateString() === tomorrow.toDateString() ||
      eventDate.toDateString() === yesterday.toDateString()
    );
  }

  /*
  onEventMounted(arg: EventMountArg) {
    console.log(arg);

    var event = arg.event;
    var startDate = event.start;  
    var endDate = event.end;  

    this.StartStr.push(arg.event.startStr);
    this.EndStr.push(arg.event.endStr);

  this.eventData();    
    console.log('event: ', event);

    // console.log('Event Start Date:', startDate);
    // console.log('Event End Date:', endDate);
  }
*/

  onEventMounted(arg: EventMountArg) {
    const title = arg.event.title;
    const date = arg.event.startStr.split('T')[0]; // Extract date (YYYY-MM-DD)
    const startTime = arg.event.startStr.split('T')[1]; // Extract start time (HH:MM:SS)
    const endTime = arg.event.endStr ? arg.event.endStr.split('T')[1] : '';
    const eventDate = arg.event.startStr;
    const currentEvent = arg.event;

    // Call getEventColor to get the color based on title, date, startTime, and endTime
    // const color = this.getEventColor(title, date, startTime, endTime);
    const color = title === "Lunch Break" ? "orange" : this.getEventColor(title, date, startTime, endTime);
  
    // Apply the color to the event element
    arg.el.style.backgroundColor = color;
    arg.el.style.borderColor = color;

    // if (arg.event.allDay) {
    //   // Mark the date as having an all-day event
    //   this.allDayDates[eventDate] = true;
    // }

    if (arg.event.allDay && arg.event.extendedProps['function'] === 'Holiday') {
      this.allDayDates[eventDate] = true;
  }
  
    // Check if the date has an all-day event already
    if (this.allDayDates[eventDate] && !arg.event.allDay) {
      // Hide non-all-day events if an all-day event exists on this date
      arg.el.style.display = 'none';
    }

// Check if the current event is a full-day event (holiday)
if (currentEvent.allDay) {
  // Loop through all events to find events on the same day
  arg.view.calendar.getEvents().forEach(event => {
    // Ensure event.start exists and currentEvent.start exists
    if (event.start && currentEvent.start) {
      // Check if the event is not a full-day event and is on the same day as the full-day event
      if (!event.allDay && event.start.toDateString() === currentEvent.start.toDateString()) {
        
        // Handle end time of the full-day event
        const currentEventEndTime: number = currentEvent.end 
          ? currentEvent.end.getTime() 
          : new Date(currentEvent.start).getTime(); // Assume full day ends at 23:59:59 if no explicit end

        // Ensure event.end exists for comparison
        if (event.end) {
          // Check if the smaller event overlaps with the full-day event
          const eventEndTime = event.end.getTime(); // event.end is a Date object
          if (event.start.getTime() < currentEventEndTime && eventEndTime > currentEvent.start.getTime()) {
            // Disable or hide the smaller event
            event.setProp('display', 'none'); // Hide the small event
            event.setExtendedProp('editable', false); // Disable event editing
          }
        }
      }
    }
  });
}
  }
  

  saveAttendance(attendanceData: any): void {
    this.authservice.saveAttendance(attendanceData).subscribe((response: any) => {

      // let userdetails = sessionStorage.getItem('userdetails');
      // if (userdetails) {
      //   let user = JSON.parse(userdetails);
      // }

      let userDetails = sessionStorage.getItem('userdetails');
      let userEmail = null;

      if (userDetails) {
        let user = JSON.parse(userDetails);
        userEmail = user.email;  // Get userId from session storage
      }

      // userId = localStorage.setItem();
      this.snackBar.open('Attendance saved successfully!', 'Close', {
        duration: 3000,
        verticalPosition: 'top'
      });
    },
      error => {
        this.snackBar.open('Failed to save attendance.', 'Close', {
          duration: 3000,
          verticalPosition: 'top'
        });
      });
  }

  //fetch attendance data from the server
  fetchAttendanceData() {
    this.authservice.getAttendance().subscribe((data: any) => {
      this.attendanceData = data;
    });
  }

  /*
  eventData(){
    const array: any[] = [];
    for (let record1 of this.StartStr) {
      //here I want to compare the date, start and end time of each event which is passed from the eventDidMount
      for (let record of this.attendanceData) {

        // console.log('record Date : ',record.start.substring(0,record.start.indexOf('T')))
        // console.log('record1 Date : ',record1.substring(0,record1.indexOf('T')))
        


        if(record.start.substring(0,record.start.indexOf('T')) === record1.substring(0,record1.indexOf('T'))){
          console.log('matching dates are: ',record.start.substring(0,record.start.indexOf('T')) , record1.substring(0,record1.indexOf('T')))
          // this.MatchedDates  = record1.substring(0,record1.indexOf('T')); includes duplicate records 
          array.push(record1.substring(0,record1.indexOf('T')));

          // if(record.start.substring(record.start.indexOf('T') + 1, record.start.indexOf('.')) == record1.substring(record1.indexOf('T')+1,record1.indexOf(' '))){
          //   console.log('Time : ', record.start.indexOf('T') + 1, record.start.indexOf('.')) , record1.substring(record1.indexOf('T')+1,record1.indexOf(''));
          // }
        }
      }
    }
    this.MatchedDates = array.filter((value, index, self) => self.indexOf(value) === index)

    console.log('Dates Array : ', this.MatchedDates);
    
  }
*/

  // MatchedDates: any[] = [];

eventData() {
  const array: any[] = [];
  for (let record1 of this.StartStr) {
    // here I want to compare the date, start, and end time of each event which is passed from eventDidMount
    for (let record of this.attendanceData) {
      const recordDate = record.start.substring(0, record.start.indexOf('T'));
      const recordStartTime = record.start.substring(record.start.indexOf('T') + 1, record.start.indexOf('.'));
      const recordEndTime = record.end.substring(record.end.indexOf('T') + 1, record.end.indexOf('.'));
      
      const eventDate = record1.substring(0, record1.indexOf('T'));
      const eventStartTime = record1.substring(record1.indexOf('T') + 1); // Extracts '09:00:00'

      // const eventEndTime = record1.substring(record1.indexOf('T') + 1, record1.indexOf('.'));

      // Compare the dates
      if (recordDate === eventDate && recordStartTime ===eventStartTime ) {
        console.log('Matching dates are: ', recordDate, eventDate);

        // Store date, start time, and end time in an object
        array.push({
          date: eventDate,
          startTime: eventStartTime
        });
      }
    }
  }
  
  // Remove duplicates if necessary
  this.MatchedDates = array.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.date === value.date && t.startTime === value.startTime && t.endTime === value.endTime
    ))
  );

  console.log('Dates Array with Start and End Times: ', this.MatchedDates);
}


  //compare event with attendance data and return the appropriate color
  getEventColor(title: string, date: string, startTime: string, endTime: string): string {
    // console.log('start str : Inside getEventColor() : ', this.StartStr);

     // Looping through the attendance data 
    for (let record of this.attendanceData) {
      if (record.title === title && record.start.substring(0,record.start.indexOf('T')) === date && 
      record.start.substring(record.start.indexOf('T') + 1, record.start.indexOf('.')) === startTime &&
      record.end.substring(record.end.indexOf('T') + 1, record.end.indexOf('.')) === endTime) {
          
       if (record.status === 'Approved') {
        return 'green';
      } else if (record.status === 'Rejected') {
        return 'red';
      }
      }
    }
    // '#FF033E'-- red (light) '#7cbf7c' -- green (light)
    return '';
  }


  //This should properly fetch the records from the backend so we will be able to put them in the fullcalendar 
  fetchevents(info: EventSourceFuncArg, successCallback: (eventInputs: EventInput[]) => void, failureCallback: (error: Error) => void): any {
    let events: EventInput[] = [];
    this.authservice.getCalendar().subscribe({
      next: (data: any) => {

        // for(i->start = mon - friday)
        // for(let index=1; index<6; index++){}
        let eventSlot1: EventInput = {
          title: data[2].slot1,
          daysOfWeek: ['1'],
          startTime: '09:00:00',
          endTime: '10:00:00',
        
          // backgroundColor: this.getEventColor(data[2].slot1, '09:00:00', '10:00:00'),  // Use the getEventColor function
          // borderColor: this.getEventColor(data[2].slot1, '09:00:00', '10:00:00')
        };
        this.eventColorUpdate(eventSlot1);
        events.push(eventSlot1);

        let eventSlot2: EventInput = {
          title: data[2].slot2,
          daysOfWeek: ['1'],
          startTime: '10:00:00',
          endTime: '11:00:00',
          // backgroundColor: this.getEventColor(data[2].slot2, '10:00:00', '11:00:00'),
          // borderColor: this.getEventColor(data[2].slot2, '10:00:00', '11:00:00')
          // color: this.eventColorUpdate(eventSlot1)
        }
        events.push(eventSlot2);

        let eventSlot3: EventInput = {
          title: data[2].slot3,
          daysOfWeek: ['1'],
          startTime: '11:00:00',
          endTime: '12:00:00',
          // backgroundColor: this.getEventColor(data[2].slot3, '11:00:00', '12:00:00'),
          // borderColor: this.getEventColor(data[2].slot3, '11:00:00', '12:00:00')
        }
        events.push(eventSlot3);

        let eventSlot4: EventInput = {
          title: data[2].slot4,
          daysOfWeek: ['1'],
          startTime: '12:00:00',
          endTime: '13:00:00',
          // backgroundColor: this.getEventColor(data[2].slot4, '12:00:00', '13:00:00'),
          // borderColor: this.getEventColor(data[2].slot4, '12:00:00', '13:00:00')
        }
        events.push(eventSlot4);

        let eventSlot5: EventInput = {
          title: data[2].slot5,
          daysOfWeek: ['1'],
          startTime: '13:00:00',
          endTime: '14:00:00',
          color: 'orange'
        }
        events.push(eventSlot5);

        let eventSlot6: EventInput = {
          title: data[2].slot6,
          daysOfWeek: ['1'],
          startTime: '14:00:00',
          endTime: '15:00:00',
          // backgroundColor: this.getEventColor(data[2].slot6, '14:00:00', '15:00:00'),
          // borderColor: this.getEventColor(data[2].slot6, '14:00:00', '15:00:00')
        }
        events.push(eventSlot6);

        let eventSlot7: EventInput = {
          title: data[2].slot7,
          daysOfWeek: ['1'],
          startTime: '15:00:00',
          endTime: '16:00:00',
          // backgroundColor: this.getEventColor(data[2].slot7, '15:00:00', '16:00:00'),
          // borderColor: this.getEventColor(data[2].slot7, '15:00:00', '16:00:00')
          //color: this.updateEventStatus(title, start, end: string, status); Based on this function I want to change the colour of each event 
        }
        events.push(eventSlot7);

        let eventSlot8: EventInput = {
          title: data[2].slot8,
          daysOfWeek: ['1'],
          startTime: '16:00:00',
          endTime: '17:00:00',
          // backgroundColor: this.getEventColor(data[2].slot8, '16:00:00', '17:00:00'),
          // borderColor: this.getEventColor(data[2].slot8, '16:00:00', '17:00:00')
        }
        events.push(eventSlot8);

        //Tue
        let eventTueSlot1: EventInput = {
          title: data[3].slot1,
          daysOfWeek: ['2'],
          startTime: '09:00:00',
          endTime: '10:00:00',
          // backgroundColor: this.getEventColor(data[3].slot1, '09:00:00', '10:00:00'),
          // borderColor: this.getEventColor(data[3].slot1, '09:00:00', '10:00:00')
        };
        events.push(eventTueSlot1);

        let eventTueSlot2: EventInput = {
          title: data[3].slot2,
          daysOfWeek: ['2'],
          startTime: '10:00:00',
          endTime: '11:00:00',
          // backgroundColor: this.getEventColor(data[3].slot2, '10:00:00', '11:00:00'),
          // borderColor: this.getEventColor(data[3].slot2, '10:00:00', '11:00:00')
        };
        events.push(eventTueSlot2);

        let eventTueSlot3: EventInput = {
          title: data[3].slot3,
          daysOfWeek: ['2'],
          startTime: '11:00:00',
          endTime: '12:00:00',
          // backgroundColor: this.getEventColor(data[3].slot3, '11:00:00', '12:00:00'),
          // borderColor: this.getEventColor(data[3].slot3, '11:00:00', '12:00:00')
        };
        events.push(eventTueSlot3);

        let eventTueSlot4: EventInput = {
          title: data[3].slot4,
          daysOfWeek: ['2'],
          startTime: '12:00:00',
          endTime: '13:00:00',
          // backgroundColor: this.getEventColor(data[3].slot4, '12:00:00', '13:00:00'),
          // borderColor: this.getEventColor(data[3].slot4, '12:00:00', '13:00:00')
        };
        events.push(eventTueSlot4);

        let eventTueSlot5: EventInput = {
          title: data[3].slot5,
          daysOfWeek: ['2'],
          startTime: '13:00:00',
          endTime: '14:00:00',
          color: 'orange'
        };
        events.push(eventTueSlot5);

        let eventTueSlot6: EventInput = {
          title: data[3].slot6,
          daysOfWeek: ['2'],
          startTime: '14:00:00',
          endTime: '15:00:00',
          // backgroundColor: this.getEventColor(data[3].slot6, '14:00:00', '15:00:00'),
          // borderColor: this.getEventColor(data[3].slot6, '14:00:00', '15:00:00')
        };
        events.push(eventTueSlot6);

        let eventTueSlot7: EventInput = {
          title: data[3].slot7,
          daysOfWeek: ['2'],
          startTime: '15:00:00',
          endTime: '16:00:00',
          // backgroundColor: this.getEventColor(data[3].slot7, '15:00:00', '16:00:00'),
          // borderColor: this.getEventColor(data[3].slot7, '15:00:00', '16:00:00')
        };
        events.push(eventTueSlot7);

        let eventTueSlot8: EventInput = {
          title: data[3].slot8,
          daysOfWeek: ['2'],
          startTime: '16:00:00',
          endTime: '17:00:00',
          // backgroundColor: this.getEventColor(data[3].slot8, '16:00:00', '17:00:00'),
          // borderColor: this.getEventColor(data[3].slot8, '16:00:00', '17:00:00')
        };
        events.push(eventTueSlot8);

        //wed
        let eventWedSlot1: EventInput = {
          title: data[4].slot1,
          daysOfWeek: ['3'],
          startTime: '09:00:00',
          endTime: '10:00:00',
          // backgroundColor: this.getEventColor(data[4].slot1, '09:00:00', '10:00:00'),
          // borderColor: this.getEventColor(data[4].slot1, '09:00:00', '10:00:00')
        };
        events.push(eventWedSlot1);

        let eventWdeSlot2: EventInput = {
          title: data[4].slot2,
          daysOfWeek: ['3'],
          startTime: '10:00:00',
          endTime: '11:00:00',
          // backgroundColor: this.getEventColor(data[4].slot2, '10:00:00', '11:00:00'),
          // borderColor: this.getEventColor(data[4].slot2, '10:00:00', '11:00:00')
        };
        events.push(eventWdeSlot2);

        let eventWedSlot3: EventInput = {
          title: data[4].slot3,
          daysOfWeek: ['3'],
          startTime: '11:00:00',
          endTime: '12:00:00',
          // backgroundColor: this.getEventColor(data[4].slot3, '11:00:00', '12:00:00'),
          // borderColor: this.getEventColor(data[4].slot3, '11:00:00', '12:00:00')
        };
        events.push(eventWedSlot3);

        let eventWedSlot4: EventInput = {
          title: data[4].slot4,
          daysOfWeek: ['3'],
          startTime: '12:00:00',
          endTime: '13:00:00',
          // backgroundColor: this.getEventColor(data[4].slot4, '12:00:00', '13:00:00'),
          // borderColor: this.getEventColor(data[4].slot4, '12:00:00', '13:00:00')
        };
        events.push(eventWedSlot4);

        let eventWedSlot5: EventInput = {
          title: data[4].slot5,
          daysOfWeek: ['3'],
          startTime: '13:00:00',
          endTime: '14:00:00',
          color: 'orange'
        };
        events.push(eventWedSlot5);

        let eventWedSlot6: EventInput = {
          title: data[4].slot6,
          daysOfWeek: ['3'],
          startTime: '14:00:00',
          endTime: '15:00:00',
          // backgroundColor: this.getEventColor(data[4].slot6, '14:00:00', '15:00:00'),
          // borderColor: this.getEventColor(data[4].slot6, '14:00:00', '15:00:00')
        };
        events.push(eventWedSlot6);

        let eventWedSlot7: EventInput = {
          title: data[4].slot7,
          daysOfWeek: ['3'],
          startTime: '15:00:00',
          endTime: '16:00:00',
          // backgroundColor: this.getEventColor(data[4].slot7, '15:00:00', '16:00:00'),
          // borderColor: this.getEventColor(data[4].slot7, '15:00:00', '16:00:00')
        };
        events.push(eventWedSlot7);

        let eventWedSlot8: EventInput = {
          title: data[4].slot8,
          daysOfWeek: ['3'],
          startTime: '16:00:00',
          endTime: '17:00:00',
          // backgroundColor: this.getEventColor(data[4].slot8, '16:00:00', '17:00:00'),
          // borderColor: this.getEventColor(data[4].slot8, '16:00:00', '17:00:00')
        };
        events.push(eventWedSlot8);

        //Thu
        let eventThuSlot1: EventInput = {
          title: data[5].slot1,
          daysOfWeek: ['4'],
          startTime: '09:00:00',
          endTime: '10:00:00',
          // backgroundColor: this.getEventColor(data[5].slot1, '09:00:00', '10:00:00'),
          // borderColor: this.getEventColor(data[5].slot1, '09:00:00', '10:00:00')
          // color: 'green',
          // textColor: 'black'
        };
        events.push(eventThuSlot1);

        let eventThuSlot2: EventInput = {
          title: data[5].slot2,
          daysOfWeek: ['4'],
          startTime: '10:00:00',
          endTime: '11:00:00',
          // backgroundColor: this.getEventColor(data[5].slot2, '10:00:00', '11:00:00'),
          // borderColor: this.getEventColor(data[5].slot2, '10:00:00', '11:00:00')
        };
        events.push(eventThuSlot2);

        let eventThuSlot3: EventInput = {
          title: data[5].slot3,
          daysOfWeek: ['4'],
          startTime: '11:00:00',
          endTime: '12:00:00',
          // backgroundColor: this.getEventColor(data[5].slot3, '11:00:00', '12:00:00'),
          // borderColor: this.getEventColor(data[5].slot3, '11:00:00', '12:00:00')
        };
        events.push(eventThuSlot3);

        let eventThuSlot4: EventInput = {
          title: data[5].slot4,
          daysOfWeek: ['4'],
          startTime: '12:00:00',
          endTime: '13:00:00',
          // backgroundColor: this.getEventColor(data[5].slot4, '12:00:00', '13:00:00'),
          // borderColor: this.getEventColor(data[5].slot4, '12:00:00', '13:00:00')
        };
        events.push(eventThuSlot4);

        let eventThuSlot5: EventInput = {
          title: data[5].slot5,
          daysOfWeek: ['4'],
          startTime: '13:00:00',
          endTime: '14:00:00',
          color: 'orange'
        };
        events.push(eventThuSlot5);

        let eventThuSlot6: EventInput = {
          title: data[5].slot6,
          daysOfWeek: ['4'],
          startTime: '14:00:00',
          endTime: '15:00:00',
          // backgroundColor: this.getEventColor(data[5].slot6, '14:00:00', '15:00:00'),
          // borderColor: this.getEventColor(data[5].slot6, '14:00:00', '15:00:00')
        };
        events.push(eventThuSlot6);

        let eventThuSlot7: EventInput = {
          title: data[5].slot7,
          daysOfWeek: ['4'],
          startTime: '15:00:00',
          endTime: '16:00:00',
          // backgroundColor: this.getEventColor(data[5].slot7, '15:00:00', '16:00:00'),
          // borderColor: this.getEventColor(data[5].slot7, '15:00:00', '16:00:00')
        };
        events.push(eventThuSlot7);

        let eventThuSlot8: EventInput = {
          title: data[5].slot8,
          daysOfWeek: ['4'],
          startTime: '16:00:00',
          endTime: '17:00:00',
          // backgroundColor: this.getEventColor(data[5].slot8, '16:00:00', '17:00:00'),
          // borderColor: this.getEventColor(data[5].slot8, '16:00:00', '17:00:00')
        };
        events.push(eventThuSlot8);

        //Fri

        let eventFriSlot1: EventInput = {
          title: data[6].slot1,
          daysOfWeek: ['5'],
          startTime: '09:00:00',
          endTime: '10:00:00',
          // backgroundColor: this.getEventColor(data[6].slot1, '09:00:00', '10:00:00'),
          // borderColor: this.getEventColor(data[6].slot1, '09:00:00', '10:00:00')
        };
        events.push(eventFriSlot1);

        let eventFriSlot2: EventInput = {
          title: data[6].slot2,
          daysOfWeek: ['5'],
          startTime: '10:00:00',
          endTime: '11:00:00',
          // backgroundColor: this.getEventColor(data[6].slot2, '10:00:00', '11:00:00'),
          // borderColor: this.getEventColor(data[6].slot2, '10:00:00', '11:00:00')
        };
        events.push(eventFriSlot2);

        let eventFriSlot3: EventInput = {
          title: data[6].slot3,
          daysOfWeek: ['5'],
          startTime: '11:00:00',
          endTime: '12:00:00',
          // backgroundColor: this.getEventColor(data[6].slot3, '11:00:00', '12:00:00'),
          // borderColor: this.getEventColor(data[6].slot3, '11:00:00', '12:00:00'),
          cssClass: ''
        };
        events.push(eventFriSlot3);

        let eventFriSlot4: EventInput = {
          title: data[6].slot4,
          daysOfWeek: ['5'],
          startTime: '12:00:00',
          endTime: '13:00:00',
          // backgroundColor: this.getEventColor(data[6].slot4, '12:00:00', '13:00:00'),
          // borderColor: this.getEventColor(data[6].slot4, '12:00:00', '13:00:00')
        };
        events.push(eventFriSlot4);

        let eventFriSlot5: EventInput = {
          title: data[6].slot5,
          daysOfWeek: ['5'],
          startTime: '13:00:00',
          endTime: '14:00:00',
          color: 'orange'
        };
        events.push(eventFriSlot5);

        let eventFriSlot6: EventInput = {
          title: data[6].slot6,
          daysOfWeek: ['5'],
          startTime: '14:00:00',
          endTime: '15:00:00',
          // backgroundColor: this.getEventColor(data[6].slot6, '14:00:00', '15:00:00'),
          // borderColor: this.getEventColor(data[6].slot6, '14:00:00', '15:00:00')
        };
        events.push(eventFriSlot6);

        let eventFriSlot7: EventInput = {
          title: data[6].slot7,
          daysOfWeek: ['5'],
          startTime: '15:00:00',
          endTime: '16:00:00',
          // backgroundColor: this.getEventColor(data[6].slot7, '15:00:00', '16:00:00'),
          // borderColor: this.getEventColor(data[6].slot7, '15:00:00', '16:00:00')
        };
        events.push(eventFriSlot7);

        let eventFriSlot8: EventInput = {
          title: data[6].slot8,
          daysOfWeek: ['5'],
          startTime: '16:00:00',
          endTime: '17:00:00',
          // backgroundColor: this.getEventColor(data[6].slot8 , '16:00:00', '17:00:00'),
          // borderColor: this.getEventColor(data[6].slot8, '16:00:00', '17:00:00')
          // color: this.Eventcolor()
          // color: this.updateEventStatus();
        };

        events.push(eventFriSlot8);
        this.eventColorUpdate(eventFriSlot8)        

        successCallback(events);
      }
      
    })

      eventColor: '#378006'
    // let events ;
    // let element! : any;
    // this.authservice.getCalendar().subscribe({
    //   next : (data: any)=>{
    //   for (let index = 4; index < data.length; index++) {
    //      element = data[index];
    //   }
    //  }
    // })
  };

  /*  All day Holiday events to display  */
  fetchholidays(info: EventSourceFuncArg, successCallback: (eventInputs: EventInput[]) => void, failureCallback: (error: Error) => void): any {
    let holidays: EventInput[] = [];
    this.authservice.getCalendarHolidays().subscribe({

      next: (data: any) => {

        console.log(data);
        
        let holiday1: EventInput = {
          title: data[0].occasion,
          startStr: data[0].date,
          startTime: '09:00:00',
          endTime: '05:00:00',

          allDay: true,
          overlap: false, // Prevents overlap with other events
          display: 'auto', // Places the event in the foreground

          extendedProps: {
            function : 'Republic Day'
          },
        };
        
        holidays.push(holiday1);
        successCallback(holidays);
      }
    })
  }

  /*  */

  //handliing status changes emitted by TeacherComponent
  onStatusChange(eventData: any) {
    const { event, status } = eventData;

    this.updateEventColor(event.title, event.start, event.end, status);
  }

  updateEventColor(title: string, start: string, end: string, status: string): void {
    //calendar API
    const calendarApi = this.calendarComponent.getApi();

    // let event = calendarApi.getEvents().find(e => e.title === title );
    let event = calendarApi.getEvents().find(e =>
      e.title === title &&
      e.start?.getTime() === new Date(start).getTime() &&
      e.end?.getTime() === new Date(end).getTime()
    );

    // const event2 = this.eventColorUpdate(event);
    // let event2 : any;
    // let event = calendarApi.getEvents().find(e => e.title === title && e.startStr === start && e.endStr === end );
    // event= calendarApi.getCurrentData
    // if (title === event2.title && start === event2.start && end === event2.end) {

    if (event) {

      switch (status) {
        case 'Approved':
          event.setProp('backgroundColor', 'green');
          event.setProp('borderColor', 'black');
          event.setProp('textColor', 'black');
          break;
        case 'Rejected':
          event.setProp('backgroundColor', 'red');
          event.setProp('borderColor', 'black');
          event.setProp('textColor', 'black');
          break;
        default:
          event.setProp('backgroundColor', 'orange');
          break;
      }
      // }
    }
  }

  eventColorUpdate(eventData: any): any {
    const { event } = eventData;

    // this.title = eventData.title; this.start = eventData.startTime; this.end = eventData.endTime;

    // this.authservice.getAttendance().subscribe({
    //   next: (data : any) => {
    //     this.attendance = data;
    //     if(data.title===event.title && data.start === event.startStr && data.end === event.endStr){
    //       if(data.status){
    //         switch (data.status) {
    //           case 'Approved':
    //             event.setProp('backgroundColor', 'green');
    //             event.setProp('borderColor', 'black');
    //             event.setProp('textColor','black');
    //             break;
    //           case 'Rejected':
    //             event.setProp('backgroundColor', 'red');
    //             event.setProp('borderColor', 'black');
    //             event.setProp('textColor','black');
    //             break;
    //           default:
    //             event.setProp('backgroundColor', 'orange');
    //             break;
    //         }
    //       }
    //     }
    //   },
    // });

    //.toTimeString()

    this.authservice.getAttendance().subscribe({
      next: (data: any[]) => {
        this.attendance = data;
        console.log('Attendance data:', data);//all the attended record table
        console.log('Event data:', eventData);//single record passed by event

        const matchingAttendance = data.find((record) => {
          console.log('Comparing start:', record.start, eventData.startTime);
          console.log('Comparing end:', record.end, eventData.endTime);
         
          // console.log('time: ', record.start.substring(record.start.indexOf('T') + 1))
          // console.log('time: ', record.start.substring(0, record.start.indexOf('.')))
          // console.log('time: ', record.start.substring(record.start.indexOf('T') + 1, record.start.indexOf('.')))

          // console.log('date:', record.start.substring(0, record.start.indexOf('T')))


          // record.title == eventData.title &&
          //   record.start.substring(record.start.indexOf('T') + 1, record.start.indexOf('.')) == eventData.startTime &&
          //   record.end.substring(record.end.indexOf('T') + 1, record.end.indexOf('.')) == eventData.endTime


          if (record.title == eventData.title && 
            record.start.substring(record.start.indexOf('T') + 1, record.start.indexOf('.')) == eventData.startTime &&
            record.end.substring(record.end.indexOf('T') + 1, record.end.indexOf('.')) == eventData.endTime)
            return true;
          else
            return false;
        });
        console.log('MachingAttedance:', matchingAttendance);

        if (matchingAttendance) {
          if (matchingAttendance.status) {
            switch (matchingAttendance.status) {
              case 'Approved':
                eventData.setProp('backgroundColor', 'green');
                eventData.setProp('borderColor', 'black');
                eventData.setProp('textColor', 'black');
                break;
              case 'Rejected':
                eventData.setProp('backgroundColor', 'red');
                eventData.setProp('borderColor', 'black');
                eventData.setProp('textColor', 'black');
                break;
              default:
                eventData.setProp('backgroundColor', 'orange');
                break;
                
            }
          }

          // this.calendarComponent.getApi().render();
          this.calendarComponent.getApi().refetchEvents();
        } else {
          console.warn('No matching attendance record found.');
        }
      },
      error: (err) => {
        console.error('Error fetching attendance data', err);
      }
    });

  }


  handleDateClick(arg: DateClickArg) {
    alert('date click! ' + arg.dateStr);
  }

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends; // toggle the boolean!
  }

  someMethod() {
    let calendarApi = this.calendarComponent.getApi();
    let date = calendarApi.getDate();
    console.log(date);
    calendarApi.next();
  }

  /*
    // Function to handle approval using title, start, and end
    approveEvent(title: string, start: string, end: string) {
      this.updateEventStatus(title, start, end, 'approved');
    }
  
    // Function to handle rejection using title, start, and end
    rejectEvent(title: string, start: string, end: string) {
      this.updateEventStatus(title, start, end, 'rejected');
    }
  
    //to update event status and color based on title, start, and end
    updateEventStatus(title: string, start: string, end: string, status: string | null) {
      const event = this.events.find((e: { title: string; start: string; end: string; }) => e.title === title && e.start === start && e.end === end);
      if (event) {
        event.status = status;
        switch (status) {
          case 'approved':
            event.color = 'green';
            break;
          case 'rejected':
            event.color = 'red';
            break;
          default:
            event.color = 'orange'; // status is null or any other case
            break;
        }
      }
    }
*/
  /*
  
  onStatusChange(event: any, status: string) {
    // Handle the event, update the UI, or apply any logic
    console.log('Event status changed:', event, status);
    if (status === 'Approved' || status === 'Rejected') {
      this.applyGreenStatus(event); // Example: Change color to green
    }
    
  }
  
  applyGreenStatus(event: any) {
    // Add logic to change the event display color to green
  
    const eventdata = this.events.find((e: { title: string; start: string; end: string; }) => e.title === title && e.start === start && e.end === end);
    if (event) {
  
    switch (status) {
      case 'Approved':
        event.setProp('backgroundColor', 'green');
        event.setProp('borderColor', 'green');
        break;
      case 'Rejected':
        event.setProp('backgroundColor', 'red');
        break;
      default:
        event.setProp('backgroundColor', 'orange');
        break;
    }
   }
  }
  
  */

}
// function handleEventDate(id: string, startDate: Date | null, endDate: Date | null) {
//   // throw new Error('Function not implemented.');

//   console.log('Start Date: ', startDate);
//   console.log('End Date: ', endDate);
  
  
// }



 // console.log('start:',record.start.toTimeString);     --undefined
          // console.log('start:',record.start.toTimeString());  -- this is not working reloading the screen and all data is discarded 