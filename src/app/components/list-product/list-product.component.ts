import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';
import { AttributeProduct } from 'src/app/model/attribute-product.model';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  public setAttribute: AttributeProduct[] = [];

  public attributeProduct!: AttributeProduct;

  public valueHighOld = 0;
  public valueLowOld = 0;

  public valueHigh = 0;
  public maxHigh= 100;
  public minHigh = 0;

  public valueLow = 0;
  public maxLow= 100;
  public minLow = 0;

  public step = 1;

  disabledHigh = false;
  disabledLow = false;

 
  constructor() { }

  ngOnInit(): void {
    this.attributeProduct = new AttributeProduct (1,'THƯƠNG HIỆU','Dell');

    for (let index = 0; index < 5; index++) {
     this.setAttribute.push(this.attributeProduct);
    }
  }
  
  public onInputSliderHighChange(event: MatSliderChange) {
    console.log("High");
    console.log(event.value);
    this.maxLow = this.valueHigh;
  }

  public onInputSliderLowChange(event: MatSliderChange) {
    console.log("Low");
    console.log(event.value);
  }

}
