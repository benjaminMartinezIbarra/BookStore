import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {AppValidator} from '../../cart/cart-reactive/app-validator';

@Directive({
  selector: '[appEmailValidator], [type=email]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidatorDirective),
      multi: true,
    }
  ]
})
export class EmailValidatorDirective implements Validator{

  @Input() domain: string;

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return AppValidator.email(this.domain) (control);
  }

}
