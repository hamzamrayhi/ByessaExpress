import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";

import {RegisterComponent} from "./components/register/register.component";
import {CartComponent} from "./components/cart/cart.component";
import {CheckoutComponent} from "./components/checkout/checkout.component";
import {ProductComponent} from "./components/product/product.component";
import {ThankyouComponent} from "./components/thankyou/thankyou.component";
import { EngineComponent } from './components/engine/engine.component';
import { SuspensionComponent } from './components/suspension/suspension.component';
import { ExhaustComponent } from './components/exhaust/exhaust.component';



const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
 
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'checkout', component: CheckoutComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  },
  {
    path: 'engine', component: EngineComponent
  },
  {
    path: 'suspension', component: SuspensionComponent
  },
  {
    path: 'exhaust', component: ExhaustComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
