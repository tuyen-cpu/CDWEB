import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import {CartComponent} from "./components/cart/cart.component";
import { AddressComponent } from './components/address/address.component';

const routes: Routes = [
  {path : '', component : HomeComponent},
  {path:'cart', component:CartComponent},
  {path:'address', component:AddressComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
