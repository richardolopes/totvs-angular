import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  listRestaurants() {
    return this.http.get('http://localhost:3000/restaurants');
  }

  restaurantById(id: string) {
    return this.http.get(`http://localhost:3000/restaurants/${id}`);
  }

  reviewById(id: string) {
    return this.http.get(`http://localhost:3000/restaurants/${id}/reviews`);
  }

  menuById(id: string) {
    return this.http.get(`http://localhost:3000/restaurants/${id}/menu`);
  }
}
