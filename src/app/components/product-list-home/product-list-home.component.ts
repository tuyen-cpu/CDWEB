import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation} from "swiper";
import {SwiperComponent} from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-product-list-home',
  templateUrl: './product-list-home.component.html',
  styleUrls: ['./product-list-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductListHomeComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

}
