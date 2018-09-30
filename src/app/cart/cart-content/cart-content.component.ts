import { Component, OnInit } from '@angular/core';
import {CartService} from '../../core/services/cart.service';
import {Title} from '@angular/platform-browser';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.css']
})
export class CartContentComponent implements OnInit {

  constructor(public cart: CartService,
              private title: Title,
              private router: Router) { }

  ngOnInit() {
    this.title.setTitle('Panier');
  }

  orderCart() {
    this.router.navigate(['/cart/order']);
  }

}
