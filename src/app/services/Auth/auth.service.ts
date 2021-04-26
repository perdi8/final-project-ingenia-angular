import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Models/expert-list/user/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  responseToken: string = '';
  isLoggedIn: boolean = false;

  @Output() logged: EventEmitter<boolean> = new EventEmitter();
  constructor(private http: HttpClient) {}

  login(user: User): Observable<any> {
    let body = {
      email: user.email,
      password: user.password,
    };

    this.http
      .post('https://final-project-ingenia.herokuapp.com/auth/login', body)
      .subscribe(() => {
        this.logged.emit(true);
      });

    return this.http.post(
      'https://final-project-ingenia.herokuapp.com/auth/login',
      body
    );
  }

  isLogged(): EventEmitter<boolean> {
    return this.logged;
  }

  logout(): void {
    this.logged.emit(false);

    this.login({ email: '', password: '' }).subscribe((response) => {
      sessionStorage.removeItem(response.token);
    });
  }

  get loggedIn() {
    return this.isLoggedIn;
  }
  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
