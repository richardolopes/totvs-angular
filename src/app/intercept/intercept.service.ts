import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(req);
    
    const request = req.clone({
      setHeaders: {
        "token xpto": localStorage.getItem('token')
      }
    });

    return next.handle(request);
  }
}
