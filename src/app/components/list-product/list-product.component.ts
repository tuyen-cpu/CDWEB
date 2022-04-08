import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  slidesStore = [
    {
      id:'1',
      src:'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh.png?v=1648702456000',
      alt:'Image_1',
      title:'Image_1'
    },
    {
      id:'2',
      src:'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh.png?v=1648702456000',
      alt:'Image_2',
      title:'Image_3'
    },
    {
      id:'3',
      src:'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh.png?v=1648702456000',
      alt:'Image_3',
      title:'Image_3'
    },
    {
      id:'4',
      src:'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh.png?v=1648702456000',
      alt:'Image_4',
      title:'Image_4'
    },
    {
      id:'5',
      src:'https://bizweb.sapocdn.net/thumb/medium/100/329/122/products/laptop-gaming-gigabyte-aorus-17-xe5-73vn534gh.png?v=1648702456000',
      alt:'Image_5',
      title:'Image_5'
    }
  ]
  constructor() { }

  ngOnInit(): void {

  }

}
