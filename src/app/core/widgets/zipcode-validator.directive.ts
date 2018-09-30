///<reference path="../../cart/cart-reactive/app-validator.ts"/>
import { Directive } from '@angular/core';
import {NG_VALIDATORS} from '@angular/forms';
import {AppValidator} from '../../cart/cart-reactive/app-validator';

@Directive({
  selector: '[appZipcodeValidator],[zipcode]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useValue: AppValidator.zipcode,
      multi: true
    }
  ]
})
export class ZipcodeValidatorDirective {

  constructor() {
    console.log('zipcodeValidatorDirective');
  }

}
