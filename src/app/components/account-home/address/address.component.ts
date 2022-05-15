import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
    isShowNewAddress:boolean=false;
  constructor() { }
  toggleNewAddress(){
    this.isShowNewAddress=!this.isShowNewAddress
  }
  ngOnInit(): void {
  }

}
