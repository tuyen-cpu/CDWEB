import { Bill } from './../model/bill.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppSettings } from './app-setttings';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  REST_API = AppSettings.REST_API + 'bill/';
  constructor(private http: HttpClient) {}
  getOrders() {
    return this.http.get<Bill[]>(this.REST_API);
  }
}
