import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './order.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  finalizeOrder(order: Order) {
    return this.http.post('http://localhost:3000/orders', order).pipe(
      map(response => response)
    );
  }
}
