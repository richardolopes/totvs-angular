import { Component, OnInit } from '@angular/core';
import { MenuCartService } from './menu-cart.service';

@Component({
  selector: 'app-menu-cart',
  templateUrl: './menu-cart.component.html'
})
export class MenuCartComponent implements OnInit {

  constructor(private cart: MenuCartService) { }

  ngOnInit() {
  }

  addToCart(item: any) {
    this.cart.addItem(item);
  }

  itemsCart() {
    return this.cart.readyCart();
  }

}
