import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import {CartRootComponent} from './cart-root/cart-root.component';
import {CartContentComponent} from './cart-content/cart-content.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CartOrderComponent } from './cart-order/cart-order.component';
import { CartReactiveComponent } from './cart-reactive/cart-reactive.component';
import {WidgetsModule} from '../core/widgets/widgets.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WidgetsModule,
    ReactiveFormsModule,
    CartRoutingModule
  ],
  declarations: [CartRootComponent,
  CartContentComponent,
  CartOrderComponent,
  CartReactiveComponent]
})
export class CartModule { }
