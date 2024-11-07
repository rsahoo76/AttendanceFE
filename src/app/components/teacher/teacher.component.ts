import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Attendance } from '../../attendance';
import { HomeComponent } from '../home/home.component';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent {
attendance: Attendance[] = [];
status!: String;
userEmail!: String;
events!: any;
userId!: number;
searchValue: string | undefined;

constructor(private authservice: AuthService,
){}


@Output() statusChange = new EventEmitter<any>();

updateStatus(event: any, status: string) {
  // const updatedEvent = { event, status };
  console.log('updateStatus called with:', event, status);
 
  // this.http.post('/api/attendance/updateStatus', updatedEvent)
  this.authservice.updateAttendanceStatus(event.title,event.start,event.end,status).subscribe(
    (response: any) => {
      if(status!=='Approved'){
      // console.log('Status updated successfully:', response);
      event.status = status;  // Update status in UI
      alert("Status updated successfully");
      // updateEvent(event.title,event.start,event.end);
      this.approveEvent(event);
    }
    },
    (error: any) => {
      console.error('Error updating status: ', error);
    }
  );
}
 
ngOnInit(): void {
  this.authservice.getAttendance().subscribe({
    next: (data : any) => {
      this.attendance = data;
    },
    error: (error: HttpErrorResponse) => {
      console.error('There was an error!', error);
    }
  });
  
}

setNewUserName(event: Event): void {
  console.log('setNewUserName', (event.target as HTMLTextAreaElement).value);
}


approveEvent(event: any) {
  this.statusChange.emit({ event: event, status: 'Approved' });
  
}

rejectEvent(event: any) {
  this.statusChange.emit({ event: event, status: 'Rejected' });
}

}


