import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/util/confirm-password.validator';
import { passwordValidator } from 'src/app/util/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private fb: FormBuilder
  ) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, 
                      passwordValidator(/\d/, { hasNumber: true }),
                      passwordValidator(/[A-Z]/, { hasUpperCase: true }),
                      passwordValidator(/[a-z]/, { hasLowerCase: true }),
                      Validators.minLength(6)
                    ]],
      confirmPassword: ['']
    }, { 
      validators: ConfirmPasswordValidator('password', 'confirmPassword')
    });
  }

  ngOnInit(): void {
  }
  get f() { return this.signUpForm.controls; }
  onSubmit(): void {
    console.log(this.signUpForm.value);
  }

}
