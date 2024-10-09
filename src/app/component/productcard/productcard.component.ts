import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/productservice/products.service';
import { CartService } from '../../services/cart/cart-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css',
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  products: any[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.productsService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);

    const existingCart = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const existingItem = existingCart.find(
      (item: any) => item.title === product.title
    );
    if (existingItem) {
      existingItem.quantity;
    } else {
      existingCart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('cartItems', JSON.stringify(existingCart));
  }
}
