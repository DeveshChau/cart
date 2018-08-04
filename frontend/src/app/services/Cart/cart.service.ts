import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  myCart = []
  cart = {}
  constructor() { }

  addToCart(movie){
    this.myCart.push(movie)
    this.cart = {"cart":this.myCart,"length":this.myCart.length}
    return this.cart
  }
}
