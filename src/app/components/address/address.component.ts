import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  isShowNewAddress: boolean = false;
  addressForm!: FormGroup;

  constructor() {}
  toggleNewAddress() {
    this.isShowNewAddress = !this.isShowNewAddress;
  }
  ngOnInit(): void {
    this.initForm();
  }
  get addressFormControl() {
    return this.addressForm.controls;
  }
  onSubmit() {
    console.log(this.addressForm);
  }
  private initForm() {
    this.addressForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      city: new FormControl('', [Validators.required, Validators.minLength(5)]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(
          /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/
        ),
      ]),
    });
  }
}
