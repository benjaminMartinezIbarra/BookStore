import { Injectable } from '@angular/core';
import {CartRow} from '../model/cart-row';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
rows: CartRow [] = [];

  constructor() { }
  add(book: Book) {
    this.rows.push(new CartRow(book, 1));
  }
  remove(row: CartRow) {
    this.rows = this.rows.filter(value => value !== row);
  }
  count() {
    return this.rows
      .map(value => value.quantity)
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  }
  total() {
    return this.rows
      .map(row => row.amount)
      .reduce((total, value) => total + value, 0);
  }

  isEmpty(): boolean {
    return this.rows.length === 0;
  }
}
