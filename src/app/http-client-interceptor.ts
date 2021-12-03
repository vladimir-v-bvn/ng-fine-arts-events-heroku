import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import {LocalStorageService} from 'ngx-webstorage';
import { Observable } from 'rxjs';

@Injectable()
export class httpClientInterceptor implements HttpInterceptor {

  constructor (private localStorage: LocalStorageService) {
  }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.localStorage.retrieve('authenticationToken');
    if (token) {
    //console.log('1 -- ' + token);
      httpRequest = httpRequest.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    //console.log(httpRequest.headers.getAll('Authorization'));

      return next.handle(httpRequest);
    } else {
    //console.log('2 -- ' + '-');
      return next.handle(httpRequest);
    }
  }
  
}