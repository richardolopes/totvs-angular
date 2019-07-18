import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantDetailComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantDetailReviewComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail-review/restaurant-detail-review.component';
import { RestaurantDetailMenuComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail-menu/restaurant-detail-menu.component';
import { MenuItemComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail-menu/menu-item/menu-item.component';
import { MenuCartComponent } from './restaurants/restaurant/restaurant-detail/restaurant-detail-menu/menu-cart/menu-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    NotfoundComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    RestaurantDetailReviewComponent,
    RestaurantDetailMenuComponent,
    MenuItemComponent,
    MenuCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
