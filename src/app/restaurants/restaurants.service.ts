import { Injectable } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpService) { }

  listRestaurants() {
    return this.http.get('restaurants');
  }

  restaurantById(id: string) {
    return this.http.get(`restaurants/${id}`);
  }

  reviewById(id: string) {
    return this.http.get(`restaurants/${id}/reviews`);
  }

  menuById(id: string) {
    return this.http.get(`restaurants/${id}/menu`);
  }
}
