import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TagListViewComponent } from 'src/app/Views/tag-list-view/tag-list-view.component';

@Component({
  selector: 'app-dialog-delete-tag',
  templateUrl: './dialog-delete-tag.component.html',
  styleUrls: ['./dialog-delete-tag.component.scss'],
})
export class DialogDeleteTagComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DialogDeleteTagComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  cancelar() {
    this.dialogRef.close('Cancelado');
  }

  eliminar() {
    this.dialogRef.close('Borrado');
  }
}
