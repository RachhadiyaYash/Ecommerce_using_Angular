import { Component, OnInit, OnDestroy } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  totalItems: number = 0;
  isMenuOpen: boolean = false;
  private cartSubscription!: Subscription;
  router: any;

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleLinkClick(href: string) {
    this.isMenuOpen = false;
    this.router.navigate([href]);
  }
}
