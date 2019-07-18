import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'src/app/restaurants/restaurants.service';

@Component({
  selector: 'app-restaurant-detail-review',
  templateUrl: './restaurant-detail-review.component.html'
})
export class RestaurantDetailReviewComponent implements OnInit {

  public reviews: any;

  constructor(private negocioRestaurant: RestaurantsService, private route: ActivatedRoute) {
    this.negocioRestaurant.reviewById(this.route.parent.snapshot.params['id']).subscribe( result => {
      this.reviews = result;
    });
   }

  ngOnInit() {
  }

}
