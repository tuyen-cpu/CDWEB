import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.model';
// export interface CartItem {
//   name: sPC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W);
//   img: string;
//   price:number;
//   quantity: number;
// }
//
// const ELEMENT_DATA: CartItem[] = [
//   {name:'PPC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W) văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.pnghttps://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png',price:100,quantity:10,},
//   {name:'PPC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W) văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.pnghttps://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png',price:100,quantity:10,},
//   {name:'PPC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W) văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.pnghttps://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png',price:100,quantity:10,},
//   {name:'PPC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W) văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.pnghttps://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png',price:100,quantity:10,},
//   {name:'PPC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W) văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.pnghttps://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png',price:100,quantity:10,},
//   {name:'PPC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W) văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.pnghttps://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png',price:100,quantity:10,},
//   {name:'PPC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W) văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.pnghttps://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png',price:100,quantity:10,},
//
// ];
export interface CartItem {
  name: string;
  img: string;
  price: number;
  quantity: number;
}

const ELEMENT_DATA: CartItem[] = [
  { name: 'PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W) PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png', price: 1200000, quantity: 1},
  { name: 'PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png', price: 1200000, quantity: 1},
  { name: 'PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png', price: 1200000.941, quantity: 2},
  { name: 'PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png', price: 1200000.0122, quantity: 1},
  { name: 'PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png', price: 1200000.811, quantity: 1},
  { name: 'PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png', price: 1200000.0107, quantity: 1},
  { name: 'PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png', price: 1200000.0067, quantity: 1},
  { name: 'PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png', price: 1200000.9994, quantity: 3},
  { name: 'PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png', price: 1200000.9984, quantity: 3},
  { name: 'PC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)',img: 'https://bizweb.dktcdn.net/thumb/small/100/329/122/products/pc-van-phong-st-vp03.png', price: 1200000.1797, quantity: 43},
];
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  // displayedColumns: string[] = [' name-prPC văn phòng ST-VP03 (i3-10105 , Ram 8GB, SSD 250GB, 550W)', 'img-product', 'price-product', 'quantity-product','total-product','  action-product'];
  displayedColumns: string[] = ['img-product','name-product',  'price-product', 'quantity-product','total-product','action-product'];
  dataSource=ELEMENT_DATA;
totalCart:number=0;
  constructor() { }
  decreaseQuantity(e:any):void{
    e.value=--e.value;
    if(e.value<0){
      e.value=0
    }
  }
  increaseQuantity(e:any):void{
    e.value=++e.value;
  }
  getTotal():void{
    this.totalCart= this.dataSource.reduce((previousValue,currentValue)=>previousValue+(currentValue.quantity*currentValue.price),0)
}
  ngOnInit(): void {
    this.getTotal()
  }

}
