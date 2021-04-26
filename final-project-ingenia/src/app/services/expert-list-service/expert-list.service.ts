import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExpertListService {
  constructor(private http: HttpClient) {}

  getAllExperts(): Observable<Object[]> {
    return this.http.get<object[]>(
      'https://final-project-ingenia.herokuapp.com/api/expertos'
    );
    // .pipe(catchError(this.handleError));
  }

  getExpertByNombre(nombre: string): Observable<Object[]> {
    return this.http.get<object[]>(
      `https://final-project-ingenia.herokuapp.com/api/expertos?nombre=${nombre}`
    );
    // .pipe(catchError(this.handleError));
  }

  getTagByEtiqueta(nombre: string): Observable<Object[]> {
    return this.http.get<object[]>(
      `https://final-project-ingenia.herokuapp.com/api/tags?nombre=${nombre}`
    );
    // .pipe(catchError(this.handleError));
  }

  getExpertByEstado(estado: string): Observable<Object[]> {
    return this.http.get<object[]>(
      `http://final-project-ingenia.herokuapp.com/api/expertos?estado=${estado}`
    );
    // .pipe(catchError(this.handleError));
  }

  getExpertByValoracion(puntuacion: number): Observable<Object[]> {
    return this.http.get<object[]>(
      `http://final-project-ingenia.herokuapp.com/api/expertos?puntuacion=${puntuacion}`
    );
    // .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);

    return Observable.throw(err.message);
  }
}
