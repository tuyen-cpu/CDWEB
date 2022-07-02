import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../model/cart-item.model';
import { ProductService } from './product.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: CartItem[] = [];
  public cart = new BehaviorSubject<CartItem[]>([]);
  constructor(
    private storageService: StorageService,
    private productService: ProductService
  ) {
    this.cartItemList = storageService.getCartItemList() || [];
  }

  public getCart() {
    this.cart.next(this.cartItemList);
    return this.cart.asObservable();
  }

  public setCart(list: CartItem[]) {
    this.cartItemList = list;
    this.cart.next(this.cartItemList);
    this.storageService.saveCartItemList(this.cartItemList);
  }

  public addToCart(item: CartItem) {
    let existItem: boolean = false;
    this.cartItemList.map((itemCart: CartItem, index: number) => {
      if (itemCart.id === item.id) {
        this.productService.getQuantityProductById(item.id).subscribe({
          next: (res) => {
            let maxQuantity = res;
            itemCart.quantity += item.quantity;
            if (maxQuantity < itemCart.quantity) {
              itemCart.quantity = maxQuantity;
            }
            this.cart.next(this.cartItemList);
            this.storageService.saveCartItemList(this.cartItemList);
            return;
          },
          error: (err) => {
            console.log(err);
          },
        });
        existItem = true;
      }
    });
    if (!existItem) {
      this.cartItemList.push(item);
      this.cart.next(this.cartItemList);
      this.storageService.saveCartItemList(this.cartItemList);
      return;
    }
  }
  public updateCartItem(itemId: number, quantity: number) {
    this.cartItemList.map((itemCart: CartItem, index: number) => {
      if (itemCart.id === itemId) {
        this.productService.getQuantityProductById(itemId).subscribe({
          next: (res) => {
            let maxQuantity = res;
            itemCart.quantity = quantity;
            if (maxQuantity < quantity) {
              itemCart.quantity = maxQuantity;
            }
            this.cart.next(this.cartItemList);
            this.storageService.saveCartItemList(this.cartItemList);
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    });
  }

  public removeCartItem(productId: number) {
    this.cartItemList.map((item: CartItem, index: number) => {
      if (productId === item.id) {
        this.cartItemList.splice(index, 1);
        this.cart.next(this.cartItemList);
        this.storageService.saveCartItemList(this.cartItemList);
      }
    });
  }

  public removeAllCartItems() {
    this.storageService.removeCartItemList();
  }
}
