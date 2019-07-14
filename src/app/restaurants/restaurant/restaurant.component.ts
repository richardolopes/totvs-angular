import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant;

  constructor() { }

  ngOnInit() {
  }

}
