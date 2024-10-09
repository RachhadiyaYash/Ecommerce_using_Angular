import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPrice: number = 0;

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
    this.loadCartItems();
  }

  decreaseQuantity(product: any) {
    this.cartService.decreaseQuantity(product);
    this.loadCartItems();
  }

  removeFromCart(product: any) {
    this.cartService.removeFromCart(product);
    this.loadCartItems();
  }
}
