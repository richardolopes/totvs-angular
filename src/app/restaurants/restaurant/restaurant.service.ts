import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  infRestaurant(id: string) {
    return this.http.get('http://localhost:3000/restaurants?id=' + id);
  }
}
