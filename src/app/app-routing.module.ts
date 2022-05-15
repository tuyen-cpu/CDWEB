import { AccountHomeComponent } from './components/account-home/account-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { AddressComponent } from './components/address/address.component';
import { AccountComponent } from './components/account-home/account/account.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list', component: ListProductComponent },
  {
    path: 'account',
    component: AccountHomeComponent,
    children: [
      {
        path: '',
        component: AccountComponent,
      },
      {
        path: 'address',
        component: AddressComponent,
      },
    ],
  },
  { path: 'product/:id', component: DetailProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
