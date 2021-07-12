import { Cart } from './../interfaces/cart.interface';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Cart;

  constructor(){
    this.cart = {
      items: [
        { id: 1, name: 'Produto Teste', value: 'R$350,00', date: Date.now() }
      ]
    }
    debugger
  }

}
