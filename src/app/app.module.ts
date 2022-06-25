import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';

//Components
import { ItemProductComponent } from './components/item-product/item-product.component';
import { ListProductComponent } from './components/list-product/list-product.component';
import { ProductListHomeComponent } from './components/product-list-home/product-list-home.component';

//primeNg
import { PaginatorModule } from 'primeng/paginator';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';

//Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

//Form
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatRadioModule } from '@angular/material/radio';
// Swiper
import { SwiperModule } from 'swiper/angular';
import { SlideHomeComponent } from './components/slide-home/slide-home.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductPopupComponent } from './components/product-popup/product-popup.component';
import { CartComponent } from './components/cart/cart.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { ViewedProductsComponent } from './components/viewed-products/viewed-products.component';
import { RecommendedProductsComponent } from './components/recommended-products/recommended-products.component';

import { AccountComponent } from './components/account-home/account/account.component';
import { AddressComponent } from './components/address/address.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

//slider
import { NgxSliderModule } from '@angular-slider/ngx-slider';

//http
import { HttpClientModule } from '@angular/common/http';
import { AccountHomeComponent } from './components/account-home/account-home.component';
import { SearchFilterPipe } from './shared/search-filter.pipe';
import { DropdownDirective } from './directives/dropdown.directive';
import { HighlighterPipe } from './pipes/highlighter.pipe';
import { SearchComponent } from './components/search/search.component';
import { MainAdminComponent } from './components/admin/main-admin/main-admin.component';
import { HeaderAdminComponent } from './components/admin/header-admin/header-admin.component';
import { MenuBarComponent } from './components/admin/menu-bar/menu-bar.component';
import { ProductManagerComponent } from './components/admin/product-manager/product-manager.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemProductComponent,
    ListProductComponent,
    ProductListHomeComponent,
    SlideHomeComponent,
    HomeComponent,
    FooterComponent,
    ProductPopupComponent,
    CartComponent,
    RegisterComponent,
    LoginComponent,
    DetailProductComponent,
    RelatedProductsComponent,
    ViewedProductsComponent,
    RecommendedProductsComponent,

    AccountComponent,
    AddressComponent,
    CheckoutComponent,
    BreadcrumbComponent,
    AccountHomeComponent,
    SearchFilterPipe,
    DropdownDirective,
    HighlighterPipe,
    SearchComponent,
    MainAdminComponent,
    HeaderAdminComponent,
    MenuBarComponent,
    ProductManagerComponent,
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
    MatDialogModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressBarModule,
    MatSliderModule,
    MatTableModule,
    MatRadioModule,
    NgxSliderModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    PaginatorModule,
    DialogModule,
    ButtonModule,
    AvatarModule,
    AvatarGroupModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
