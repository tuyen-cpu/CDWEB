import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  gridColumns!: number;
  gridByBreakpoint = {
    xl: 4,
    lg: 4,
    md: 4,
    sm: 2,
    xs: 2
  }
  constructor(public breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
        this.gridColumns=this.gridByBreakpoint.xs
      }
      if (state.breakpoints[Breakpoints.Small]) {
        this.gridColumns=this.gridByBreakpoint.sm
      }
      if (state.breakpoints[Breakpoints.Medium]) {
        this.gridColumns=this.gridByBreakpoint.md
      }
      if (state.breakpoints[Breakpoints.Large]) {
        this.gridColumns=this.gridByBreakpoint.lg
      }
      if (state.breakpoints[Breakpoints.XLarge]) {
        this.gridColumns=this.gridByBreakpoint.xl
      }
    });
  }

}
