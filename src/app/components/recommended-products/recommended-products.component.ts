import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'app-recommended-products',
  templateUrl: './recommended-products.component.html',
  styleUrls: ['./recommended-products.component.scss']
})
export class RecommendedProductsComponent implements OnInit {
  public listProduct:Product[] = [] ;
  public productItem = new Product(1,' Laptop Gaming Gigabyte AORUS 17 XE5-73VN534GH (i7-12700H, RTX 3070 Ti 8GB, Ram 16GB DDR5, SSD 1TB, 17.3 Inch IPS 360Hz FHD) ','','Intel',60660990,10,'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh.png?v=1648702456000')

  
  constructor() { }

  ngOnInit(): void {
    for (let index = 0; index < 5; index++) {
      this.listProduct.push(this.productItem);
    }
    
  }

}
