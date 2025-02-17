import { Component } from '@angular/core';
import {  Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { userInfo } from 'os';


@Component({
  selector: 'app-edit-event-dialog',
  templateUrl: './edit-event-dialog.component.html',
  styleUrl: './edit-event-dialog.component.css'
})
export class EditEventDialogComponent {
  title: string;
  start: string;
  end: string;
  attended!: boolean;
  notes!: string;   // Added notes field
  userEmail!: string;
  counter!: number;
  // formattedStart !: Date ;
  // formattedEnd!: Date;

  constructor(
    public dialogRef: MatDialogRef<EditEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.event.title;
    //  record.start.substring(record.start.indexOf('T') + 1, record.start.indexOf('.'))
    //  data.event.startStr.substring(data.event.startStr.indexOf('T')+1,data.event.startStr.indexof('.'))
    this.start = data.event.startStr;
    this.end = data.event.endStr;
    this.attended = false;
    this.notes = '';  // Initializing empty notes field

    // Assuming userId is stored in the event data or elsewhere
    let userDetails = sessionStorage.getItem('userdetails');
    if (userDetails) {
      let user = JSON.parse(userDetails);
      this.userEmail = user.email; // Set userId from session
    }
    
  }

  onSave(): void {
    this.dialogRef.close({

    //    const formattedStart = new Date(this.start).toISOString().slice(0, 19);  // Get "YYYY-MM-DDTHH:mm:ss"
    // const formattedEnd = new Date(this.end).toISOString().slice(0, 19);

     formattedStart : new Date(this.start).toISOString(),  // Full ISO string
     formattedEnd: new Date(this.end).toISOString(), 

      title: this.title,
      start: this.start,
      end: this.end,
      attended: this.attended,
      notes: this.notes,  // Pass notes along with other data
      userEmail: this.userEmail,        

    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
