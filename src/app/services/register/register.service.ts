import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(user: any): Observable<any> {
    let body = {
      email: user.email,
      username: user.name,
      password: user.password,
    };

    return this.http.post(
      'https://final-project-ingenia.herokuapp.com/register',
      body
    );
  }
}
