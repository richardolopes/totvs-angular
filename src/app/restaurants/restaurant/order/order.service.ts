import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { map } from 'rxjs/operators';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpService) { }

  finalizeOrder(order: Order) {
    return this.http.post('orders', order).pipe(
      map(response => response)
    );
  }
}
