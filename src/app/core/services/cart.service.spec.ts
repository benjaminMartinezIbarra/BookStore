import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import {CartRow} from '../model/cart-row';
import {book1, book2} from '../../../../e2e/src/book.spec';

fdescribe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('should remove a row', () => {
    const service: CartService = TestBed.get(CartService);
    service.rows = [
      new CartRow(book1, 1),
      new CartRow(book2, 2),
    ];
    service.remove(service.rows[0]);
    expect(service.rows).toEqual([new CartRow(book2, 2)]);
  });
});
