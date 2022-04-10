import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { ItemProductComponent } from './components/item-product/item-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductListHomeComponent } from './components/product-list-home/product-list-home.component';
//Material
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';


// Swiper
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    ItemProductComponent,
    ListProductComponent,
    ProductListHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTooltipModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
