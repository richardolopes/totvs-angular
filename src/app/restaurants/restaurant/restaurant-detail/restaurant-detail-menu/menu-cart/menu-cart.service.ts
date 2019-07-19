import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuCartService {
  items = [];

  addItem(item: any) {
    this.items.push(item);
  }

  readyCart() {
    return this.items;
  }

  priceCart() {

  }

  constructor() { }
}
