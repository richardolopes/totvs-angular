import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuCartService } from '../restaurant-detail/restaurant-detail-menu/menu-cart/menu-cart.service';
import { OrderService } from './order.service';
import { Order, OrderItems } from './order.model';
import { CartItem } from 'src/app/model/cart.item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  public itemsCart: any;

  constructor(private form: FormBuilder, private cart: MenuCartService, private order: OrderService, private route: Router) {
    this.itemsCart = this.cart.readyCart();
  }

  ngOnInit() {
    this.orderForm = this.form.group({
      address: this.form.control('', [
        Validators.minLength(5),
        Validators.required
      ]),
      number: this.form.control('', [
        Validators.minLength(1),
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]),
      complement: this.form.control('', [
        Validators.minLength(4),
        Validators.required
      ])
    });
  }

  send(order: Order) {
    order.orderItems = this.cart.readyCart().map((item: CartItem) => {
      return new OrderItems(item.qtd, item.menuItem.id)
    });

    this.order.finalizeOrder(order).subscribe((order: Order) => {
      this.route.navigate(['/order/finish/', order.id]);
    });
  }

  minus(item) {
    this.cart.degradeItem(item);
  }

  plus(item) {
    this.cart.incrementItem(item);
  }

}
