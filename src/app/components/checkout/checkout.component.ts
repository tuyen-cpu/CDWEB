import { AddressesService } from './../../shared/addresses.service';
import { Address } from './../../model/address.model';
import { ProvincesApiService } from './../../shared/provinces-api.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { District, Province, Ward } from 'src/app/model/province.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckoutComponent implements OnInit {
  favoriteSeason!: string;
  voucherForm!: FormGroup;
  provinceList!: Province[];
  districtList!: District[];
  communesList!: Ward[];
  addressList: Address[] = [];
  seasons: string[] = [
    'Chuyển khoản qua ngân hàng (VietQR) (Miễn phí thanh toán)',
    'Thanh toán khi giao hàng (COD)',
    '	Trả góp 0% lãi suất qua thẻ Visa, Master, JCB (Đơn hàng từ 3.000.000đ)',
    'Thanh toán online qua thẻ Visa, Master, JCB (Miễn phí thanh toán)',
  ];
  constructor(
    private provincesApiService: ProvincesApiService,
    private addressesService: AddressesService
  ) {}
  onSubmit() {
    console.log(43243);
  }

  ngOnInit(): void {
    this.initForm();
    this.provincesApiService.getProvinces().subscribe((data: Province[]) => {
      this.provinceList = data;
    });

    this.getAddresses();
  }
  onChangeProvince(event: any) {
    this.provincesApiService
      .getDistricts(event.target.value)
      .subscribe((data: Province) => {
        this.districtList = data.districts;
      });
  }
  onChangeDistrict(event: any) {
    this.provincesApiService
      .getCommunes(event.target.value)
      .subscribe((data: District) => {
        this.communesList = data.wards;
      });
  }
  getAddresses() {
    this.addressesService.getAddressesByUserId(1).subscribe((data) => {
      this.addressList = data;
    });
  }
  private initForm() {
    this.voucherForm = new FormGroup({
      voucherValue: new FormControl('', Validators.required),
    });
  }
}
