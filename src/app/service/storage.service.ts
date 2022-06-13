import { Injectable } from '@angular/core';
import { CartItem } from '../model/cart-item.model';

const USER_KEY = 'auth-user';
const   CART_KEY = 'cart';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return true;
    }
    return false;
  }

  /*
  *  handle cart
  */
  public getCartItemList(): CartItem[] {
    const cartItemList = window.localStorage.getItem(CART_KEY);
    if (cartItemList) {
      return JSON.parse(cartItemList);
    }
    return [];
  }

  public saveCartItemList(cart: CartItem[]): void {
    window.localStorage.removeItem(CART_KEY);
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }

  public removeCartItemList(): void {
    window.localStorage.removeItem(CART_KEY);
  }
}
