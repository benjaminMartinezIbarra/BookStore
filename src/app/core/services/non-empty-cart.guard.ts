import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {CartService} from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class NonEmptyCartGuard implements CanActivate {
  constructor(private cart: CartService) {
  }
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return !this.cart.isEmpty();
  }
}
