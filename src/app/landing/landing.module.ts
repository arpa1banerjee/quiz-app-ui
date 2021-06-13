import { MatButtonModule } from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngbmodule/material-carousel';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatChipsModule,
    MatCarouselModule.forRoot(),
  ]
})
export class LandingModule { }
