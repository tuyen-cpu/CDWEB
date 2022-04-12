import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Product } from 'src/app/model/product.model';
@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss']
})
export class ItemProductComponent implements OnInit {
@Input() productItem!:Product;
  constructor() { }

  ngOnInit(): void {
    this.productItem = new Product(1,' Laptop Gaming Gigabyte AORUS 17 XE5-73VN534GH (i7-12700H, RTX 3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 17.3 Inch IPS 360Hz FHD) ','',60660990,10,'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh.png?v=1648702456000')
  }

}
