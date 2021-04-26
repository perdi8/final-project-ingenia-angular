import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagListService {
  constructor(private http: HttpClient) {}

  get textoMenuNuevoExperto() {
    return 'Volver a la Lista de Etiquetas';
  }

  getTagList(): Observable<Object[]> {
    return this.http.get<object[]>(
      `https://final-project-ingenia.herokuapp.com/api/tags`
    );
    // .pipe(catchError(this.handleError));
  }

  getTagListWithLimit(number: number): Observable<Object[]> {
    return this.http.get<object[]>(
      `https://final-project-ingenia.herokuapp.com/api/tags?limite=${number}`
    );
    // .pipe(catchError(this.handleError));
  }

  getTagByNombre(nombre: any): Observable<Object[]> {
    return this.http.get<object[]>(
      `https://final-project-ingenia.herokuapp.com/api/tags?nombre=${nombre}`
    );
    // .pipe(catchError(this.handleError));
  }

  postNewTag(tag: any): Observable<Object[]> {
    let body = {
      // id: undefined,
      nombre: tag,
      created_at: `${new Date().getFullYear()}-0${new Date().getMonth()}-0${new Date().getDay()}`,
      updated_at: `${new Date().getFullYear()}-0${new Date().getMonth()}-0${new Date().getDay()}`,
    };
    console.log(body);
    return this.http.post<object[]>(
      `https://final-project-ingenia.herokuapp.com/api/tags`,
      body
    );
  }

  borrarEtiqueta(id: any): Observable<Object[]> {
    return this.http.delete<object[]>(
      `https://final-project-ingenia.herokuapp.com/api/tags/${id}`
    );
    // .pipe(catchError(this.handleError));
  }
}
