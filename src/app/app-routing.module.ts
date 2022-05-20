import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneComponent } from './phone/phone.component';
import { StoreComponent } from './store/store.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', component: StoreComponent},
  {path: 'phone/:id', component: PhoneComponent},
  {path: 'shoppingcart', component: ShoppingcartComponent},
  {path: 'shipping', component: ShippingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
