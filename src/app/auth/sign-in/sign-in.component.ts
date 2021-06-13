import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { typeSourceSpan } from '@angular/compiler';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  hide = true;
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
  }
  get f() { return this.loginForm.controls; }
  onSubmit(): void {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe(resp => {
      if(resp.ok) {
        console.log('success');
        const user = {
          token: resp.token,
          name: resp.name
        }
        this.auth.setLocalStorage(user);
        this.auth.logInSubject(true);
        this.router.navigateByUrl('/app');
      }
    })
  }

}
