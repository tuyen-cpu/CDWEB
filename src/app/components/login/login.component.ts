import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./../register/register.component.scss']
})
export class LoginComponent implements OnInit {
  public submitted = false;

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public rePwdForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      },
     
    );
    this.rePwdForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
      },
     
    );
  }

  public onSubmitLogin(){
    this.submitted = true;
    console.log(this.loginForm);
    console.log(this.loginForm.value);

  }
  public onSubmitRePwd(){
    this.submitted = true;
    console.log(this.rePwdForm);
    console.log(this.rePwdForm.value);

  }

  public get fLogin(): { [key: string]: AbstractControl } {
     return this.loginForm.controls;
  }
 
  public get fPwd(): { [key: string]: AbstractControl } {
    return this.rePwdForm.controls;
 }

}
