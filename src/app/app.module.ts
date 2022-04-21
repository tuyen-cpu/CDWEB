import { NgModule ,LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { HeaderComponent } from './header/header.component';
import {LayoutModule} from '@angular/cdk/layout';

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
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
// Swiper
import { SwiperModule } from 'swiper/angular';
import { SlideHomeComponent } from './components/slide-home/slide-home.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductPopupComponent } from './components/product-popup/product-popup.component';
import { CartComponent } from './components/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
    ,ItemProductComponent,
    ListProductComponent,
    ProductListHomeComponent,
    SlideHomeComponent,
    HomeComponent,
    FooterComponent,
    ProductPopupComponent,
    CartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatIconModule,
    LayoutModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTooltipModule,
    SwiperModule,
    MatExpansionModule,
    MatDialogModule,MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
