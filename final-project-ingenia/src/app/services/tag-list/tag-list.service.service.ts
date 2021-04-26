import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TagListServiceService {
  constructor(private http: HttpClient) {}

  // getTagByEtiqueta(nombre: string): Observable<Object[]> {
  //   return this.http.get<object[]>(
  //     `https://final-project-ingenia.herokuapp.com/api/tags?nombre=${nombre}`
  //   );
  //   // .pipe(catchError(this.handleError));
  // }
}
