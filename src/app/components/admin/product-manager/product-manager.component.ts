import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Pagination } from 'src/app/model/pagination.model';
import { Table } from 'primeng/table';
import * as customBuild from '../../../ckeditor5Custom/build/ckeditor';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./product-manager.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductManagerComponent implements OnInit {
  products!: Product[];
  product!: Product;
  cols!: any[];
  @ViewChild('dt') dt!: Table;

  productDialog!: boolean;
  submitted!: boolean;
  public Editor = customBuild;
  data: string = '<p>Hello World</p>';
  config = {
    toolbar: {
      items: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'insertTable',
        'alignment',
        'bulletedList',
        'numberedList',
        'blockQuote',
        'uploadImage',
      ],
      shouldNotGroupWhenFull: true,
    },
    image: {
      style: ['alignLeft', 'alignCenter', 'alignRight'],
      resizeUnit: '%',
      resizeOptions: [
        {
          name: 'imageResize:original',
          value: null,
          icon: 'original',
        },
        {
          name: 'imageResize:25',
          value: '25',
          icon: 'medium',
        },
        {
          name: 'imageResize:50',
          value: '50',
          icon: 'medium',
        },
        {
          name: 'imageResize:75',
          value: '75',
          icon: 'large',
        },
      ],
      toolbar: [
        'imageResize',
        'imageResize:25',

        'imageResize:original',
        'imageStyle:inline',
        'imageStyle:block',
        'imageStyle:side',
        'imageStyle:alignLeft',
        'imageStyle:alignRight',
        'imageStyle:alignCenter',
        '|',
        '|',
        'imageTextAlternative',
      ],
    },
  };
  onReady(editor) {
    if (editor.model.schema.isRegistered('image')) {
      editor.model.schema.extend('image', { allowAttributes: 'blockIndent' });
    }
  }
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
  blur() {
    console.log('blur');
  }
  onSelectionChanged() {
    console.log('selection changed');
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
    console.log(this.data);
  }

  deleteSelectedProducts() {}

  editProduct(product: Product) {}

  deleteProduct(product: Product) {}
}
