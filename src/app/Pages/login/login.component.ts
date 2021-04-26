import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/Models/expert-list/user/user.model';
import { JwtResponse } from 'src/app/Models/jwt-response/jwt-response.model';
import { AuthService } from 'src/app/services/Auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginPageComponent implements OnInit {
  hide = true;
  authSubscription: Subscription = new Subscription();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  login() {
    if (
      this.loginForm.valid &&
      this.loginForm.value.email &&
      this.loginForm.value.password
    ) {
      let user: User = new User(
        this.loginForm.value.email,
        this.loginForm.value.password
      );

      this.authSubscription = this.authService.login(user).subscribe(
        (response: JwtResponse) => {
          if (response.jwt) {
            console.log(`Token: ${response.jwt}`);
            sessionStorage.setItem('Token', response.jwt);
            this.authService.setLoggedIn(true);
            this.router.navigate(['/expertos']);
          } else {
            alert('Error: No Token Received');
            sessionStorage.removeItem('Token');
          }
        },
        (error) => {
          alert('You must provide a username and a valid password');
        }
      );
    }
  }

  get username() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
