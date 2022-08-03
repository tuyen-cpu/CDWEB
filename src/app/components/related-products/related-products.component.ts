import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation} from "swiper";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RelatedProductsComponent implements OnInit {
  @Input()
  categoryId!: number;
  public listProduct :Product[]=[];

  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getRelatedProducts(this.categoryId).subscribe({
      next:(response : Product[])=>{
        this.listProduct = response;
        console.log(this.listProduct)
      }
    })
  }

}
