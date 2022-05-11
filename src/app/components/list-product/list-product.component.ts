import { ChangeContext, Options, PointerType } from '@angular-slider/ngx-slider';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttributeProduct } from 'src/app/model/attribute-product.model';
import { Product } from 'src/app/model/product.model';
import { ProductService } from 'src/app/service/product.service';
import { ProductPopupComponent } from '../product-popup/product-popup.component';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  //thuong hieu
  public setTrademark: AttributeProduct = new AttributeProduct(
    1,
    "THƯƠNG HIỆU",
    ['Dell','Asus','HP','Lenovo','ThinkPad','Macbook','Ace','Dell','Dell','Dell','Dell','Dell']
  );


  public attributeProduct!: AttributeProduct;

  public category = "laptop";

  private sort = 'default';

  public products:Product[] = [];

  public view_list = false;

  //list attribute
  public attributes: AttributeProduct[] = [];

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
    }, getSelectionBarColor: (value: number): string => { return '#008744'; }

  };
  productItem!: Product ;

  constructor(
    public dialog: MatDialog,
    private productService : ProductService,
    ) { }

  ngOnInit(): void {
    this.attributeProduct = new AttributeProduct(1, 'Ram', ['4GB','6GB','8GB','16GB']);
    for (let index = 0; index < 5; index++) {
      this.attributes.push(this.attributeProduct);
    }
    
    this.getProducts();
  }

  public getProducts():void{
    this.productService.getProducts().subscribe(
      (response: Product[]) =>{
        this.products = response;
      },
      (error: HttpErrorResponse)=>{
        alert(error.message)
      }
    );
  }

  onUserChangeEnd(changeContext: ChangeContext): void {
    console.log(changeContext.value);
    console.log(changeContext.highValue);
  }

  formatPrice(value: number): string {
    let val = (value / 1).toFixed(0).replace('.', ',')
    return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "đ"
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
      default: value = 'Mặc định';
        break;
    }
    let myContainer = document.getElementById('selected-sort') as HTMLInputElement;
    myContainer.innerHTML = value;
    this.sort = mode;
  }

  openDialogProduct(product:Product): void {
    const dialogRef = this.dialog.open(ProductPopupComponent, {
      width: '970px',
      data: product,
    });
  }
}
