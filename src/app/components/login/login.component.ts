import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./../register/register.component.scss']
})
export class LoginComponent implements OnInit {
  public displayLoading = false;
  public submittedForget= false;
  public submitted = false;
  public isLoginFailed = false;
  public errorMessage = '';
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  public rePwdForm: FormGroup = new FormGroup({
    email: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
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
    this.displayLoading = true;
    this.submitted = true;

    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoginFailed = false;
        this.displayLoading = false;
        window.location.href="/";
      },
      error: err => {
        this.isLoginFailed = true;
        this.displayLoading = false;
      }
    });
    this.displayLoading = false;

  }
  public onSubmitRePwd(){
    this.submittedForget = true;
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
