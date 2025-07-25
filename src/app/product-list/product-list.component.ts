import { Component, inject } from '@angular/core';
import { CartService } from '../services/cart.service';

import { Product, products } from '../models/products';
import { NgFor, TitleCasePipe, CurrencyPipe } from '@angular/common';

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
    standalone: true,
    imports: [NgFor, TitleCasePipe, CurrencyPipe]
})
export class ProductListComponent {
  // Injecting CartService and ToastrService to use in this component
  // inject() is a function that allows you to inject dependencies in Angular.
  private cartService = inject(CartService);
  // ToastrService is used to show notifications to the user.
  // It provides a way to display success, error, and info messages.
  private toastr = inject(ToastrService);
  
  products = products;

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.toastr.success(product.name + ' was added to the cart.', 'You Did It!'); 
  }
}
