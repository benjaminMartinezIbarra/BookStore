import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppValidator} from './app-validator';

@Component({
  selector: 'app-cart-reactive',
  templateUrl: './cart-reactive.component.html',
  styleUrls: ['./cart-reactive.component.css']
})
export class CartReactiveComponent implements OnInit {

  submitted = false;
  form: FormGroup;
  identity: FormGroup;
  shipping: FormGroup;
  billing: FormGroup;
  distinctBilling: FormControl;

  showDistinctBillingAdress() {
    return this.distinctBilling.value;
  }

  onToggleCheckbox() {
    if (this.showDistinctBillingAdress()) {
      this.billing = this.buildAdress();
      this.form.addControl('billing', this.billing);
    } else {
      this.form.removeControl('billing');
    }
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  private save() {
    if (this.form.valid) {
      console.log (this.form.value);
    }
  }

  isButtonDisabled(): boolean {
    return this.form.invalid && this.submitted;
  }

  constructor() { }

  ngOnInit() {
    this.identity = new FormGroup( {
      firstname: new FormControl(),
      lastname: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(2)
        ]
      }),
      email: new FormControl('',{
        validators: [
          AppValidator.email('gmail.com')
        ]
      }),
      phone: new FormControl(),
    });
    this.shipping = this.buildAdress();
    this.distinctBilling = new FormControl(false);
    this.form = new FormGroup({
      identity: this.identity,
      shipping: this.shipping,
      distinctBilling: this.distinctBilling
    });
  }
  buildAdress(): FormGroup {
    return new FormGroup({
      street: new FormControl(),
      city: new FormControl('', {
        validators: [
          Validators.required
        ]
      }),
      zipcode: new FormControl('', {
        validators: [
          Validators.required,
          AppValidator.zipcode,
          Validators.pattern(/^[0-9]{4,5}$/)
        ]
      }),
      country: new FormControl(),
    });
  }

}
