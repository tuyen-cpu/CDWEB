import { ChangeContext, Options, PointerType } from '@angular-slider/ngx-slider';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttributeProduct } from 'src/app/model/attribute-product.model';
import { Product } from 'src/app/model/product.model';
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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.attributeProduct = new AttributeProduct(1, 'Ram', ['4GB','6GB','8GB','16GB']);
    for (let index = 0; index < 5; index++) {
      this.attributes.push(this.attributeProduct);
    }

    this.productItem = new Product(1,' Laptop Gaming Gigabyte AORUS 17 XE5-73VN534GH (i7-12700H, RTX 3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 17.3 Inch IPS 360Hz FHD) ','CPU: i7-12700H (Up to 4.7GHz) 14 Cores 20 Threads VGA: GeForce RTX 3070 Ti 8GB Ram: 16GB (2x8GB) DDR5 4800MHz SSD: 1TB SSD M.2 PCIe Gen4 x4 Màn hình: 17.3\'\' IPS 360Hz FHD BẢO HÀNH 2... ','Intel',60660990,10,'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh.png?v=1648702456000')

    for (let index = 0; index < 10; index++) {
      this.products.push(this.productItem);
    }

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
