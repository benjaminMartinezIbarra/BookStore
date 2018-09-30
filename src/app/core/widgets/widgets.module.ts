import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {RouterModule} from '@angular/router';
import {BuyBookButtonComponent} from './buy-book-button/buy-book-button.component';
import { RatingPipe } from './rating.pipe';
import { RatingComponent } from './rating/rating.component';
import { ErrorComponent } from './error/error.component';
import { FieldComponent } from './field/field.component';
import {ZipcodeValidatorDirective} from './zipcode-validator.directive';
import {EmailValidatorDirective} from './email-validator.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [MenuComponent,
    BuyBookButtonComponent,
    RatingPipe,
    RatingComponent,
    ErrorComponent,
    FieldComponent,
  ZipcodeValidatorDirective,
    EmailValidatorDirective
  ],
  exports: [MenuComponent,
    BuyBookButtonComponent,
    RatingPipe,
    RatingComponent,
    ErrorComponent,
    FieldComponent,
    ZipcodeValidatorDirective,
    EmailValidatorDirective]
})
export class WidgetsModule { }
