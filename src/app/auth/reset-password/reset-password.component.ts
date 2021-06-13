import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  message: string = '';
  constructor(
    private fb: FormBuilder,
    private auth: AuthService
  ) {
    this.resetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
  }
  ngOnInit(): void {
  }

  get f() { return this.resetPasswordForm.controls; }

  onSubmit(): void {
    console.log(this.resetPasswordForm.value);
    this.auth.resetPassWord(this.resetPasswordForm.value).subscribe(resp => {
      if(resp.ok) {
        this.message = 'We have a sent instructions to reset password to your registered email.';
      }
    })
  }

}
