import { NgModule } from '@angular/core';
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

// Swiper
import { SwiperModule } from 'swiper/angular';
import { SlideHomeComponent } from './components/slide-home/slide-home.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';


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
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
