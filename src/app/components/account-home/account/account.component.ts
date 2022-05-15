import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Bill } from 'src/app/model/bill.model';
import { BillService } from 'src/app/shared/bills.service';
export interface Order {
  id: string;
  date: string;
  address: string;
  total: number;
  statusCheckout: string;
  status: string;
}

const ELEMENT_DATA: Order[] = [
  {
    id: '10000',
    date: '10/10/2000',
    address: 'An Phú',
    total: 10000,
    statusCheckout: 'Đã thanh toán',
    status: 'Đã giao',
  },
  {
    id: '10000',
    date: '10/10/2000',
    address: 'An Phú',
    total: 10000,
    statusCheckout: 'Đã thanh toán',
    status: 'Đã giao',
  },
  {
    id: '10000',
    date: '10/10/2000',
    address: 'An Phú',
    total: 10000,
    statusCheckout: 'Đã thanh toán',
    status: 'Đã giao',
  },
  {
    id: '10000',
    date: '10/10/2000',
    address: 'An Phú',
    total: 10000,
    statusCheckout: 'Đã thanh toán',
    status: 'Đã giao',
  },
];
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  displayedColumns: string[] = [
    'order-id',
    'date',
    'address',
    'total',
    'status-checkout',
    'status',
  ];
  dataSource: Bill[] = [];
  constructor(
    private billService: BillService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.billService.getOrders().subscribe((data) => {
      this.dataSource = data;
    });
  }
  navigateToAddress() {
    this.router.navigate(['address'], { relativeTo: this.activatedRoute });
  }
}
