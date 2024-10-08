import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: any[] = [];
  private totalItemsSubject = new Subject<number>();

  totalItems$ = this.totalItemsSubject.asObservable();

  addToCart(product: any) {
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = existingCart.find(
      (item: any) => item.title === product.title
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cartItems', JSON.stringify(existingCart));
    this.updateTotalItems();
  }

  increaseQuantity(product: any) {
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = existingCart.find(
      (item: any) => item.title === product.title
    );

    if (existingItem) {
      existingItem.quantity += 1;
      localStorage.setItem('cartItems', JSON.stringify(existingCart));
      this.updateTotalItems();
    }
  }

  decreaseQuantity(product: any) {
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = existingCart.find(
      (item: any) => item.title === product.title
    );

    if (existingItem) {
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        this.removeFromCart(product);
        return;
      }
      localStorage.setItem('cartItems', JSON.stringify(existingCart));
      this.updateTotalItems();
    }
  }

  removeFromCart(product: any) {
    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const updatedCart = existingCart.filter(
      (item: any) => item.title !== product.title
    );
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    this.updateTotalItems();
  }

  clearCart() {
    localStorage.removeItem('cartItems');
    this.updateTotalItems();
  }

  private updateTotalItems() {
    const storedCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalItems = storedCart.reduce(
      (total: number, item: any) => total + item.quantity,
      0
    );
    this.totalItemsSubject.next(totalItems);
  }

  getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
  }
}
