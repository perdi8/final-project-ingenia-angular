// import { Injectable } from '@angular/core';
// import {
//   HttpErrorResponse,
//   HttpEvent,
//   HttpHandler,
//   HttpInterceptor,
//   HttpRequest,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { Router } from '@angular/router';
// import { catchError } from 'rxjs/operators';
// @Injectable()
// export class AuthInterceptorService implements HttpInterceptor {
//   constructor(private router: Router) {}

//   intercept(
//     req: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     const token: string | null = sessionStorage.getItem('Token ');

//     let request = req;

//     if (token) {
//       request = req.clone({
//         setHeaders: {
//           authorization: `Bearer ${token}`,
//         },
//       });
//     }

//     return next.handle(request);
//   }
// }
