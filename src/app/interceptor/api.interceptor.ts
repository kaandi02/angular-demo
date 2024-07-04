import {
    HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private interceptorUUID: string;

  constructor() {
    
    this.interceptorUUID = this.generateUUID();
    sessionStorage.setItem('interceptorUUID', this.interceptorUUID);
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const appComponentUUID = sessionStorage.getItem('uuid');

    if (!appComponentUUID) {
      console.error('UUID not found in session storage from AppComponent');
      return throwError('UUID not found in session storage from AppComponent');
    }

    // Compare UUIDs
    if (this.interceptorUUID === appComponentUUID) {
      console.log('UUIDs match, continue with request');
    } else {
      console.error('UUIDs do not match, throwing error');
      return throwError('UUIDs do not match');
    }

    req = req.clone({
      setHeaders: {
        'X-UUID': appComponentUUID,
      },
    });

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          // Unauthorized: handle error or throw custom error
          console.error('Unauthorized request');
        }
        return throwError(error);
      })
    );
  }

  private generateUUID(): string {
    let uuid = '';
    const chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 36; i++) {
      if (i === 8 || i === 13 || i === 18 || i === 23) {
        uuid += '-';
      } else if (i === 14) {
        uuid += '4';
      } else if (i === 19) {
        uuid += chars.charAt(Math.floor(Math.random() * chars.length));
      } else {
        uuid += chars.charAt(Math.floor(Math.random() * chars.length));
      }
    }

    return uuid;
  }
}
