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

  constructor(
    public dialogRef: MatDialogRef<EditEventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.event.title;
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

      title: this.title,
      start: this.start,
      end: this.end,
      attended: this.attended,
      notes: this.notes,  
      userEmail: this.userEmail,        

    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
