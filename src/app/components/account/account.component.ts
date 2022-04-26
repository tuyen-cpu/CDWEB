import { Component, OnInit } from '@angular/core';
export interface Order {
  id: string;
  date: string;
  address: string;
  total: number;
  statusCheckout:string;
  status:string
}

const ELEMENT_DATA: Order[] = [
  {id:'10000',date:'10/10/2000',address:'An Phú',total:10000,statusCheckout:'Đã thanh toán',status:'Đã giao'},
  {id:'10000',date:'10/10/2000',address:'An Phú',total:10000,statusCheckout:'Đã thanh toán',status:'Đã giao'},
  {id:'10000',date:'10/10/2000',address:'An Phú',total:10000,statusCheckout:'Đã thanh toán',status:'Đã giao'},
  {id:'10000',date:'10/10/2000',address:'An Phú',total:10000,statusCheckout:'Đã thanh toán',status:'Đã giao'}
  ];
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  displayedColumns: string[] = ['order-id','date',  'address', 'total','status-checkout','status'];
  dataSource=ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
