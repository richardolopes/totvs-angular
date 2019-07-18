import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';

@Component({
  selector: 'app-restaurant-detail-menu',
  templateUrl: './restaurant-detail-menu.component.html'
})
export class RestaurantDetailMenuComponent implements OnInit {

  public menu: any;

  constructor(private negocioRestaurant: RestaurantsService, private route: ActivatedRoute) {
    this.negocioRestaurant.menuById(this.route.parent.snapshot.params['id']).subscribe(result => {
      this.menu = result;
    });
  }

  ngOnInit() {
  }

  expondo(item) {
    console.log(item);
  }

}
