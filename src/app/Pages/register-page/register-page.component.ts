import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogRegisterComponent } from 'src/app/Components/dialog-register/dialog-register.component';
import { RegisterService } from 'src/app/services/register/register.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
  textValue: string = '';
  name = 'Email existente';

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
  });

  register() {
    this.registerService.register(this.registerForm.value).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (err) => {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        const dialogRef = this.dialog.open(
          DialogRegisterComponent,
          dialogConfig
        );

        dialogRef.afterClosed().subscribe((data) => {});

        500;
        console.log(err);
        console.log('email existente');
      }
    );
  }

  navigation() {
    this.router.navigate(['/login']);
  }
}
