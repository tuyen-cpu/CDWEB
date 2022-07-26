import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Product, ProductAdd } from 'src/app/model/product.model';
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
  product!: ProductAdd;
  cols!: any[];
  @ViewChild('dt') dt!: Table;

  productDialog!: boolean;
  productDialogEdit!: boolean;
  uploadedFiles: any[] = [];
  submitted!: boolean;
  public Editor = customBuild;
  data: string = '<p>Enter description here!</p>';
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
  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: 'Uploaded file success!',
    });
  }
  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts('', 0, 30).subscribe((res: Pagination) => {
      this.products = res.products;
      console.log(this.products);
    });
    this.cols = [
      { field: 'id', header: 'ID' },
      { field: 'name', header: 'NAME' },
      { field: 'price', header: 'PRICE' },
      { field: 'quantity', header: 'QUANTITY' },
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
      name: '',
      longDescription: this.data,
      price: 0,
      discount: 0,
      quantity: 0,
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
    this.productService.addProduct(this.product).subscribe((res) => {
      console.log(res);
      this.productDialog = false;
    });
    console.log(this.data);
    this.data = '<p>Enter description here!</p>';
  }

  deleteSelectedProducts() {}

  editProduct(product: ProductAdd) {
    this.product = { ...product };
    this.productDialogEdit = true;
  }

  deleteProduct(product: Product) {}
}
