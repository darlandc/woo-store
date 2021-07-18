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
        { id: 1, name: 'Produto Teste', price: 'R$350,00', amount: 0 }
      ]
    };
  }

  addProduct(product, persons): void {
    this.cart.items.push(product);
    console.log(this.cart);
  }

}
