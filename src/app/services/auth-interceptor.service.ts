import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const jwt = this.authService.logToken;

      if (this.authService.logIn) { //si está logado se añade el token en cada petición
          request = request.clone({
              setHeaders: { 
                  Authorization: `Basic ${jwt}`
              }
          });
      }

      return next.handle(request);
  }
}




