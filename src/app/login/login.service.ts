import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpService) { }

  login(login: Login) {
    return this.http.auth(login);
  }
}
