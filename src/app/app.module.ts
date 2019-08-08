import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
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
import { OrderComponent } from './restaurants/restaurant/order/order.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

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
    MenuCartComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
