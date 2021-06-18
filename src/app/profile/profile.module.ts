import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgxChartsModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
