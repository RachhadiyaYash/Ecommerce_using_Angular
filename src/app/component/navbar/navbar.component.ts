import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart/cart-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnDestroy {
  totalItems: number = 0;
  isMenuOpen: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    const storedTotalItems = localStorage.getItem('totalItems');
    if (storedTotalItems) {
      this.totalItems = +storedTotalItems;
    }

    this.subscription = this.cartService.totalItems$.subscribe((totalItems) => {
      this.totalItems = totalItems;
      localStorage.setItem('totalItems', totalItems.toString());
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
