import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormBuilder,  FormControl,  FormGroup,  Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public submitted = false;
  public registerForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
  });

  constructor(
    private formBuilder: FormBuilder,
    
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        rePassword: ['', Validators.required],
      },
     
    );
  }

  public onSubmit(){
    this.submitted = true;
    console.log(this.registerForm);
    console.log(this.registerForm.value);

  }

  public get f(): { [key: string]: AbstractControl } {
     return this.registerForm.controls;
  }
 
}
