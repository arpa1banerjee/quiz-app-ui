import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  title:string = 'Challenge your brain';
  subscription: Subscription;
  isLoggedIn: boolean = false;
  constructor(
    private auth: AuthService,
    private router: Router
  ) {
    this.subscription = this.auth.getIsLoggedIn().subscribe(data => {
      this.isLoggedIn = data;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }
  logout(): void {
    this.auth.logout();
    this.auth.logInSubject(false);
    this.router.navigateByUrl('/');
  }

}
