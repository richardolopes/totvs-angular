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
    console.log(this.itemsCart);
  }

  ngOnInit() {
    this.orderForm = this.form.group({
      address: this.form.control('', [
        Validators.minLength(5),
        Validators.required
      ]),
      number: this.form.control('', [
        Validators.minLength(1),
        Validators.required
      ]),
      complement: this.form.control('', [
        Validators.minLength(3),
        Validators.required
      ])
    });
  }

  send() {

  }

}
