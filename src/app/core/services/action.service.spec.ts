import {TestBed} from '@angular/core/testing';

import {ActionService} from './action.service';
import {book1} from '../../../../e2e/src/book.spec';
import {CartService} from './cart.service';
import {Router} from '@angular/router';
import Spy = jasmine.Spy;

fdescribe('ActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {provide: CartService, useValue: jasmine.createSpyObj(['add'])},
      {provide: Router, useValue: jasmine.createSpyObj(['navigate'])},
    ]
  }));

  it('should add to cart and redirect', () => {
    const service: ActionService = TestBed.get(ActionService);
    expect(service).toBeTruthy();
    service.buyBook(book1);
    const cart: CartService = TestBed.get(CartService);
    const router: Router = TestBed.get(Router);
    service.buyBook(book1);
    expect(cart.add).toHaveBeenCalledTimes(1);
    expect(cart.add).toHaveBeenCalledWith(book1);
    expect(router.navigate).toHaveBeenCalledTimes(2);
    expect(router.navigate).toHaveBeenCalledWith(['/cart/content']);
    expect(cart.add).toHaveBeenCalledBefore(router.navigate as Spy);
  });
});
