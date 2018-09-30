import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NgForm, NgModel} from '@angular/forms';
import {debounceTime, distinctUntilChanged, filter, switchMap} from 'rxjs/operators';
import {CountryService} from '../../core/services/country.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.component.html',
  styleUrls: ['./cart-order.component.css']
})
export class CartOrderComponent implements OnInit, AfterViewInit {

  @ViewChild('forminfo') forminfo: NgForm;

  @ViewChild('shippingCountryInfo') shippincountryInfo: NgModel;
  data = {
    identity: {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
    },
    shipping: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    },
    billing: {
      street: '',
      zipcode: '',
      city: '',
      country: '',
    },
    distinctBilling: false
  };
  countryList$: Observable<string[]>;

  save() {
    console.log(this.data);
  }

  constructor(private title: Title,
              private country: CountryService) { }

  ngOnInit() {
    this.title.setTitle('Commande');
  }

  logForminfo() {
    console.log(this.forminfo);
  }

  ngAfterViewInit(): void {
    this.countryList$ = this.shippincountryInfo.valueChanges.pipe(
      filter(name => name && name.trim().length >= 2),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(name => this.country.search(name))
    );
  }
}
