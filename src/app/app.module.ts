import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthModule } from './auth/auth.module';
import { LandingModule } from './landing/landing.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingModule,
    AuthModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
