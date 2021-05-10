import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogDeleteTagComponent } from '../dialog-delete-tag/dialog-delete-tag.component';

@Component({
  selector: 'app-dialog-register',
  templateUrl: './dialog-register.component.html',
  styleUrls: ['./dialog-register.component.scss'],
})
export class DialogRegisterComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DialogDeleteTagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  aceptar() {
    this.dialogRef.close('Aceptado');
  }
}
