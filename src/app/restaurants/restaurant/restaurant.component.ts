import { Component, OnInit, Input } from '@angular/core';
import { RestaurantService } from './restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: any;

  public infRestaurant: any;
  public idRestaurant:  string;

  constructor(private negocioRestaurant: RestaurantService) {
    // this.negocioRestaurant.infRestaurant(restaurant).subscribe( result => {
    //   this.listRestaurants = result;

    //   console.log(result);
    // });

    console.log(this.restaurant);
  }

  ngOnInit() { }

}
