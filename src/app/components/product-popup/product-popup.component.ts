import { ProductService } from './../../service/product.service';
import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
import { Product } from '../../model/product.model';
import { Image } from 'src/app/model/image.model';

SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: 'app-product-popup',
  templateUrl: './product-popup.component.html',
  styleUrls: ['./product-popup.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductPopupComponent implements OnInit {
  thumbsSwiper: any;
  images: Image[] = [];
  constructor(
    public dialogRef: MatDialogRef<ProductPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product,
    private productService: ProductService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  decreaseQuantity(e: any): void {
    e.value = --e.value;
    if (e.value < 0) {
      e.value = 0;
    }
  }
  increaseQuantity(e: any): void {
    e.value = ++e.value;
  }
  getValue(element: any) {
    console.log(element.value);
  }
  ngOnInit(): void {
    this.productService
      .getImagesProduct(this.data.id)
      .subscribe((resp: Image[]) => {
        this.images = resp;
      });
  }
}
