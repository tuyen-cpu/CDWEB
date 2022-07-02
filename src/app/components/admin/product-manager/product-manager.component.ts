import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pagination } from 'src/app/model/pagination.model';
import { Table } from 'primeng/table';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./product-manager.component.scss'],
})
export class ProductManagerComponent implements OnInit {
  products!: Product[];
  product!: Product;
  cols!: any[];
  @ViewChild('dt') dt!: Table;

  productDialog!: boolean;
  submitted!: boolean;

  constructor(
    private productService: ProductService // private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts('l', 1, 10).subscribe((res: Pagination) => {
      this.products = res.products;
      console.log(this.products);
    });
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'NAME' },
      { field: 'price', header: 'PRICE' },
      { field: 'brand', header: 'BRAND' },
      { field: 'discount', header: 'DISCOUNT' },
    ];
  }
  applyFilterGlobal($event: any, stringVal: any) {
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal);
  }
  openNew() {
    this.product = {
      id: 123,
      name: '',
      desc: 'string',
      brand: 'string',
      price: 123,
      discount: 12,
      urlImg: 'string',
    };
    this.submitted = false;
    this.productDialog = true;
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  saveProduct() {
    this.submitted = true;
  }
  deleteSelectedProducts() {}

  editProduct(product: Product) {}

  deleteProduct(product: Product) {}
}
