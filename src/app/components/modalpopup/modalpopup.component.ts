import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.component.html',
  styleUrl: './modalpopup.component.css'
})
export class ModalpopupComponent {
  flag : boolean = true;

  constructor( private dialogRef: MatDialog){}

  openDialog(){
   
      this.dialogRef.open(ModalpopupComponent)
   
  }

}
