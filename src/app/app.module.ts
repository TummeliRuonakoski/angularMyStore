import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavComponent } from './layout/nav/nav.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StoreComponent } from './store/store.component';
import { PhoneComponent } from './phone/phone.component';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { BackButtonDirective } from './backbutton.directive';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CartService } from './cart.service';
import { ShippingComponent } from './shipping/shipping.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    StoreComponent,
    PhoneComponent,
    BackbuttonComponent,
    BackButtonDirective,
    ShoppingcartComponent,
    ShippingComponent,
    ProductAlertsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
