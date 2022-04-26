import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutComponent implements OnInit {
  favoriteSeason!: string;
  recipeForm!: FormGroup;
  seasons: string[] = [
    'Chuyển khoản qua ngân hàng (VietQR) (Miễn phí thanh toán)',
    'Thanh toán khi giao hàng (COD)',
    '	Trả góp 0% lãi suất qua thẻ Visa, Master, JCB (Đơn hàng từ 3.000.000đ)',
    'Thanh toán online qua thẻ Visa, Master, JCB (Miễn phí thanh toán)',
  ];
  constructor() {}
  onSubmit() {
    console.log(43243);
  }
  initForm() {
    this.recipeForm = new FormGroup({
      voucherValue: new FormControl('', Validators.required),
    });
  }
  ngOnInit(): void {
    this.initForm();
  }
}
