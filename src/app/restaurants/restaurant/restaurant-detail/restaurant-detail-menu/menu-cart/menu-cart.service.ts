import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuCartService {
  items = [];
  price = 0;

  addItem(item: any) {
    const index: number = this.items.indexOf(item);

    if (index < 0) {
      this.items.push(item);
    } else {
      // this.items[index].push({qtd: 4});
    }

    this.price += item.price;
  }

  readyCart() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    this.price = 0;
  }

  priceCart() {
    return this.price.toFixed(2);
  }

  constructor() { }
}
