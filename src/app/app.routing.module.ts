import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { RestaurantDetailComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantDetailReviewComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail-review/restaurant-detail-review.component';
import { RestaurantDetailMenuComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail-menu/restaurant-detail-menu.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      {
        path: 'review', component: RestaurantDetailReviewComponent
      },
      {
        path: 'menu', component: RestaurantDetailMenuComponent
      }
    ]
  },
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
