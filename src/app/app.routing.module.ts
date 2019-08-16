import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { RestaurantDetailComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantDetailReviewComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail-review/restaurant-detail-review.component';
import { RestaurantDetailMenuComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail-menu/restaurant-detail-menu.component';
import { LoginComponent } from './login/login.component';
import { AboutGuardService } from './guardian/about-guard.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', loadChildren: './about/about.module#AboutModule', canActivate: [AboutGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'restaurants', component: RestaurantsComponent, canActivate: [AboutGuardService]},
  {path: 'restaurants/:id', component: RestaurantDetailComponent, canActivate: [AboutGuardService], 
    children: [
      {
        path: '', redirectTo: 'menu', pathMatch: 'full'
      },
      {
        path: 'review', component: RestaurantDetailReviewComponent
      },
      {
        path: 'menu', component: RestaurantDetailMenuComponent
      }
    ]
  },
  {path: 'order', loadChildren: './restaurants/restaurant/order/order.module#OrderModule' , canActivate: [AboutGuardService]},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
