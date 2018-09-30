import { Injectable } from '@angular/core';
import {CartService} from './cart.service';
import {Router} from '@angular/router';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  constructor(private cart: CartService,
              private router: Router) { }

  buyBook(book: Book) {
    this.cart.add(book);
    this.router.navigate( ['/cart/content']);

  }
}
