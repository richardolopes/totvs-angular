import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../restaurants.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  public detail: any;

  constructor(private negocioRestaurant: RestaurantsService, private route: ActivatedRoute) {
    this.negocioRestaurant.restaurantById(this.route.snapshot.params['id']).subscribe( result => {
      this.detail = result;
    });
   }

  ngOnInit() {
  }

}
