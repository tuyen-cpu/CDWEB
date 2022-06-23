import { AttributeService } from './../../service/attribute.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import {
  ChangeContext,
  Options,
  PointerType,
} from '@angular-slider/ngx-slider';
import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Attribute, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Paginator } from 'primeng/paginator';
import { AttributeProduct } from 'src/app/model/attribute-product.model';
import { Pagination } from 'src/app/model/pagination.model';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { ProductPopupComponent } from '../product-popup/product-popup.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {
  public categoryId!: string;
  currentPage: number = 1;
  size: number = 1;
  totalPages!: number;
  params: any = {};
  private sort = 'default';

  public products: Product[] = [];
  private f: Object[] = [];
  public view_list = false;

  //list attribute
  public attributes: AttributeProduct[] = [];
  brands: string[] = [];
  //slider
  value: number = 0;
  highValue: number = 110000000;
  options: Options = {
    floor: 0,
    ceil: 110000000,
    step: 1,
    noSwitching: true,
    getPointerColor: (value: number): string => {
      return '#008744';
    },
    translate: (value: number): string => {
      return '';
    },
    getSelectionBarColor: (value: number): string => {
      return '#008744';
    },
  };
  productItem!: Product;

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private attributeService: AttributeService
  ) {}

  ngOnInit(): void {
    // this.productService
    //   .filterProduct({ category_id: ['1', '2'] })
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    this.getParamsUrl();

    this.attributeService
      .getAttributesByCategoryId(+this.categoryId)
      .subscribe((data) => {
        this.attributes = data;
        this.attributes.forEach((e) => {
          if (e.name === 'THƯƠNG HIỆU') {
            console.log(e.name);
            this.brands = this.brands.concat(e.values);
          }
        });
      });
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    console.log(changeContext.value);
    console.log(changeContext.highValue);
  }

  formatPrice(value: number): string {
    let val = (value / 1).toFixed(0).replace('.', ',');
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 'đ';
  }

  sortBy(mode: string) {
    let value = 'Mặc định';
    switch (mode) {
      case 'AZ':
        value = 'A → Z';
        break;
      case 'ZA':
        value = 'Z → A';
        break;
      case 'increase':
        value = 'Giá tăng dần';
        break;
      case 'decrease':
        value = 'Giá giảm dần';
        break;
      case 'new':
        value = 'Hàng mới nhất';
        break;
      case 'old':
        value = 'Hàng cũ nhất';
        break;
      default:
        value = 'Mặc định';
        break;
    }
    let myContainer = document.getElementById(
      'selected-sort'
    ) as HTMLInputElement;
    myContainer.innerHTML = value;
    this.sort = mode;
  }

  openDialogProduct(product: Product): void {
    const dialogRef = this.dialog.open(ProductPopupComponent, {
      width: '970px',
      data: product,
    });
  }
  onPageChange(event: any) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        currentPage: event['page'] + 1,
        size: this.size,
      },
      queryParamsHandling: 'merge',
    });
  }
  attributesChange(event: any, attributeName: string) {
    const value = event.target.value;
    if (event.currentTarget.checked) {
      this.params[attributeName]
        ? (this.params[attributeName] = [...this.params[attributeName], value])
        : (this.params[attributeName] = [...[], value]);
    } else {
      this.params[attributeName] = this.params[attributeName].filter(
        (e: any) => e !== value
      );
    }
    /**
     * Remove value with empty array of key
     */
    // Object.keys(this.params).forEach((para) => {
    //   {
    //     if (this.params[para].length === 0) {
    //       console.log('rEmpty');
    //       delete this.params[para];
    //     }
    //   }
    // });
    this.changeUrl();
  }
  changeUrl() {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: this.params,
    });
  }
  getParamsUrl() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      let someObj: any = {
        // price_gte: 390000,
        // price_lte: 550000,
        'THƯƠNG HIỆU': ['Asus', 'Dell'],

        // category_id: 2,
      };
      let params = new URLSearchParams();
      Object.keys(someObj).forEach((k) => {
        params.set(k, someObj[k]);
      });
      console.log(params.toString());
      this.categoryId = paramMap.get('cateId')!;
      this.productService.getProductsByCategoryId(+this.categoryId).subscribe(
        (response: Pagination) => {
          this.products = response.products;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    });
    this.activatedRoute.queryParams.subscribe((res) => {
      if (res['currentPage'] === undefined) {
        this.currentPage = 0;
      } else {
        this.currentPage = res['currentPage'] - 1;
      }
      if (res['size'] === undefined) {
        this.size = 5;
      } else {
        this.size = res['size'];
      }
      this.productService.getProductsByCategoryId(+this.categoryId).subscribe(
        (response: Pagination) => {
          this.products = response.products;
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    });
  }
}
