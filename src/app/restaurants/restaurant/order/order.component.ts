import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MenuCartService } from '../restaurant-detail/restaurant-detail-menu/menu-cart/menu-cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  public itemsCart: any;

  constructor(private form: FormBuilder, private cart: MenuCartService) {
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

  send() {

  }

  minus(item) {
    this.cart.degradeItem(item);
  }

  plus(item) {
    this.cart.incrementItem(item);
  }

}
