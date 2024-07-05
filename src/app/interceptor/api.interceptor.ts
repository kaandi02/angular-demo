
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
      console.log("1", req)
      const authToken = 'YOUR_AUTH_TOKEN_HERE';
    const modifiedReq = req.clone({
      setHeaders: {
         Authorization: `Bearer ${authToken}`,
      },
    });
      
      console.log("2",modifiedReq)
      return next.handle(modifiedReq)
  }
}