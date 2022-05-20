import { Component, OnInit } from '@angular/core';
import { phones } from '../phones';
import { faFacebookF, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  faFacebookF = faFacebookF;
  faTwitterSquare = faTwitterSquare;
  faInstagram = faInstagram;
  phones = phones;
  items: any;
  phone: any;


  constructor(private cartService: CartService) { }

  share() {
    window.alert('The product has been shared!');
  }

   onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

   addToCart(phone: any) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(phone);
  }

  ngOnInit(): void {
  }

}
