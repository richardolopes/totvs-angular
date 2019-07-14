import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from './restaurants.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  public listRestaurants: any;

  constructor(private negocioRestaurant: RestaurantsService) {
    this.negocioRestaurant.listRestaurants().subscribe( result => {
      this.listRestaurants = result;

      console.log(result);
    });
   }

  ngOnInit() {
  }

}
