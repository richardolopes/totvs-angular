import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly URL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  public get(endpoint: string) {
    return this.http.get(this.URL + endpoint);
  }

  public post(endpoint: string, body: {}) {
    return this.http.post(this.URL + endpoint, body);
  }

  public auth(login: Login) {
    return this.http.post('https://apisalas.totvs.com:8888/api/v1/auth/token', login);
  }
}
