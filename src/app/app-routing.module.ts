import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartModule} from './cart/cart.module';

const routes: Routes = [
  {path: 'cart', loadChildren: './cart/cart.module#CartModule'},
  {path: '', redirectTo: 'catalog', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
