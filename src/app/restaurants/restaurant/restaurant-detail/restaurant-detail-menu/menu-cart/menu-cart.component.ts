import { Component, OnInit } from '@angular/core';
import { MenuCartService } from './menu-cart.service';

@Component({
  selector: 'app-menu-cart',
  templateUrl: './menu-cart.component.html'
})
export class MenuCartComponent implements OnInit {

  priceCart: any;

  constructor(private cart: MenuCartService) { }

  ngOnInit() {
    this.calcPriceCart();
  }

  addToCart(item: any) {
    this.cart.addItem(item);
    this.calcPriceCart();
  }

  itemsCart() {
    return this.cart.readyCart();
  }

  clearCart() {
    this.cart.clearCart();
    this.calcPriceCart();
  }

  calcPriceCart() {
    if (this.cart.priceCart() === '0.00') {
      this.priceCart = 'O carrinho está vazio';
    } else {
      this.priceCart = 'R$ ' + this.cart.priceCart();
    }
  }

}
