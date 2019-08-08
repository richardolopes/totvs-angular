import { Injectable } from '@angular/core';
import { MenuItem } from 'src/app/model/menu.item.model';
import { CartItem } from 'src/app/model/cart.item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuCartService {
  items: Array<CartItem> = [];

  addItem(item: MenuItem) {
    const res = this.items.find( (mItem) => mItem.menuItem.id === item.id );

    if (res) {
      this.incrementItem(res);
    } else {
      this.items.push(new CartItem(item));
    }
  }

  incrementItem(item: CartItem): void {
    item.qtd += 1;
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  readyCart(): Array<CartItem> {
    return this.items;
  }

  clearCart(): void {
    this.items = [];
  }

  priceCart(): number {
    return this.items.map( (item) => item.valor())
    .reduce((prev, value) => prev + value, 0);
  }

  constructor() { }
}
