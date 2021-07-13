import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) {
    console.log(this.cartService.cart.items);

   }

  ngOnInit(): void { }
}
