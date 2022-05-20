import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CartService {

   items: any[] = [];

  constructor( private http: HttpClient) { }

   addToCart(phone: any) {
    this.items.push(phone);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingRates() {
    return this.http.get('../assets/shipping.json')
  }

}