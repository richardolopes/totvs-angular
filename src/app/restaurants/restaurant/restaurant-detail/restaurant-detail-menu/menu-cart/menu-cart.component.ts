import { Component, OnInit } from '@angular/core';
import { MenuCartService } from './menu-cart.service';

@Component({
  selector: 'app-menu-cart',
  templateUrl: './menu-cart.component.html'
})
export class MenuCartComponent implements OnInit {
  constructor(private cart: MenuCartService) { }

  ngOnInit() {
    this.calcPriceCart();
  }

  addToCart(item: any) {
    this.cart.addItem(item);
    this.calcPriceCart();
  }

  removeItemCart(item) {
    this.cart.removeItem(item);
  }

  itemsCart() {
    return this.cart.readyCart();
  }

  clearCart() {
    this.cart.clearCart();
    this.calcPriceCart();
  }

  calcPriceCart() {
    return this.cart.priceCart();
  }

}
