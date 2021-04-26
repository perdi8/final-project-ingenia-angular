import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ExpertListService {
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {}

  get textoMenuEtiquetas() {
    return 'Lista de Etiquetas';
  }
  get textoMenuNuevoExperto() {
    return 'Volver a la Lista de Expertos';
  }

  getAllExperts(): Observable<Object[]> {
    return this.http.get<object[]>(
      'https://final-project-ingenia.herokuapp.com/api/expertos'
    );
    // .pipe(catchError(this.handleError));
  }

  getExpertsById(id: number): Observable<Object[]> {
    return this.http.get<object[]>(
      `https://final-project-ingenia.herokuapp.com/api/expertos/${id}`
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
      `https://final-project-ingenia.herokuapp.com/api/expertos?estado=${estado}`
    );
    // .pipe(catchError(this.handleError));
  }

  getExpertByValoracion(puntuacion: number): Observable<Object[]> {
    return this.http.get<object[]>(
      `https://final-project-ingenia.herokuapp.com/api/expertos?puntuacion=${puntuacion}`
    );
    // .pipe(catchError(this.handleError));
  }

  getExpertListWithLimit(limite: number): Observable<Object[]> {
    return this.http.get<object[]>(
      `https://final-project-ingenia.herokuapp.com/api/expertos?limite=${limite}`
    );
    // .pipe(catchError(this.handleError));
  }

  putExpert(experto: any): Observable<Object[]> {
    return this.http.put<object[]>(
      'https://final-project-ingenia.herokuapp.com/api/expertos',
      experto
    );
  }
  putByNameExpert(experto: any): Observable<Object[]> {
    return this.http.put<object[]>(
      'https://final-project-ingenia.herokuapp.com/api/expertos',
      experto
    );
  }

  postNewExpert(experto: any): Observable<Object[]> {
    return this.http.post<object[]>(
      'https://final-project-ingenia.herokuapp.com/api/expertos',
      experto
    );
  }

  handleError(err: HttpErrorResponse) {
    console.log(err.message);

    return Observable.throw(err.message);
  }
}
