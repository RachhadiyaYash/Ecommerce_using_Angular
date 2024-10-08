import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCartItems();
  }

  loadCartItems() {
    this.cartItems = this.cartService.getCartItems();
  }

  increaseQuantity(product: any) {
    this.cartService.increaseQuantity(product);
    this.loadCartItems(); // Refresh the cart items after updating quantity
  }

  decreaseQuantity(product: any) {
    this.cartService.decreaseQuantity(product);
    this.loadCartItems(); // Refresh the cart items after updating quantity
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.loadCartItems(); // Refresh the cart items after removal
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCartItems(); // Refresh the cart items after clearing
  }
}
