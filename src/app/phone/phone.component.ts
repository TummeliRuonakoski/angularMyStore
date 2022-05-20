import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { phones } from '../phones';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.css']
})
export class PhoneComponent implements OnInit {

  phones = phones;
  phone: any;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParms = this.route.snapshot.paramMap;
    const phoneId = Number(routeParms.get('id'));
    this.phone = phones.find(phone => phone.id === phoneId);
  }

  addToCart(phone: any){
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(phone);

  }

}
