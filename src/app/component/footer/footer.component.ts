import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `<footer class="w-full">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div
        class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8"
      >
        <div class="col-span-full mb-10 lg:col-span-2 lg:mb-0">
          <a routerLink="/" class="flex justify-center lg:justify-start">
            <img src="logoipsum-297.svg" alt="logo" width="200" height="200" />
          </a>
          <p
            class="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left"
          >
            Trusted in more than 100 countries & 5 million customers. Have any
            query?
          </p>
          <a
            routerLink="/contactus"
            class="py-2.5 px-5 h-9 block w-fit bg-primary rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500 hover:bg-primary-800 lg:mx-0"
          >
            Contact us
          </a>
        </div>

        <div class="lg:mx-auto text-left ">
          <h4 class="text-lg text-gray-900 font-medium mb-7">Pages</h4>
          <ul class="text-sm transition-all duration-500">
            <li class="mb-6">
              <a routerLink="/" class="hover:text-primary">Home</a>
            </li>
            <li class="mb-6">
              <a routerLink="/aboutus" class="hover:text-primary">About us</a>
            </li>
            <li class="mb-6">
              <a routerLink="/contactus" class="hover:text-primary"
                >Contact us</a
              >
            </li>
          </ul>
        </div>

        <div class="lg:mx-auto text-left ">
          <h4 class="text-lg text-gray-900 font-medium mb-7">Products</h4>
          <ul class="text-sm transition-all duration-500">
            <li class="mb-6">
              <a routerLink="/products" class=" hover:text-primary">Mens</a>
            </li>
            <li class="mb-6">
              <a routerLink="/products" class="hover:text-primary">Womens</a>
            </li>
            <li class="mb-6">
              <a routerLink="/products" class="hover:text-primary">Jewelary</a>
            </li>
            <li>
              <a routerLink="/products" class="hover:text-primary"
                >Electronics</a
              >
            </li>
          </ul>
        </div>

        <div class="lg:mx-auto text-left">
          <h4 class="text-lg text-gray-900 font-medium mb-7">Resources</h4>
          <ul class="text-sm transition-all duration-500">
            <li class="mb-6">
              <a routerLink="/#faq" class="text-gray-600 hover:text-primary"
                >FAQs</a
              >
            </li>
            <li class="mb-6">
              <a
                routerLink="/aboutus#testimonials"
                class="text-gray-600 hover:text-primary"
                >Testimonials</a
              >
            </li>
            <li class="mb-6">
              <a routerLink="/cart" class="text-gray-600 hover:text-primary"
                >Cart</a
              >
            </li>
          </ul>
        </div>

        <div class="lg:mx-auto text-left">
          <h4 class="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
          <ul class="text-sm transition-all duration-500">
            <li class="mb-6">
              <a href="javascript:;" class="text-gray-600 hover:text-gray-900"
                >News</a
              >
            </li>
            <li class="mb-6">
              <a href="javascript:;" class="text-gray-600 hover:text-gray-900"
                >Tips & Tricks</a
              >
            </li>
            <li class="mb-6">
              <a href="javascript:;" class="text-gray-600 hover:text-gray-900"
                >New Updates</a
              >
            </li>
            <li>
              <a href="javascript:;" class="text-gray-600 hover:text-gray-900"
                >Events</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="py-7 border-t border-gray-200">
        <div
          class="flex items-center justify-center flex-col lg:justify-between lg:flex-row"
        >
          <span class="text-md text-gray-500">
            © Crafted with 💕 by
            <a
              href="https://rachhadiyayash.github.io/Portfolio/"
              target="_blank"
              class="text-primary font-bold underline"
              >Yash rachhadiya</a
            >
            2024, All rights reserved.
          </span>
        </div>
      </div>
    </div>
  </footer>`,
})
export class FooterComponent {}
