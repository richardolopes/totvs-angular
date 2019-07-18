import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menu: any;

  @Output() add = new EventEmitter();

  constructor() {  }

  ngOnInit() {  }

  addCart(item) {
    this.add.emit(item);
  }

}
