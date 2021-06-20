import { ProfileRoutingModule } from './profile-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail/detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { HttpClientModule } from '@angular/common/http';

import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatListModule} from '@angular/material/list';



import { ProfileHeaderComponent } from './detail/profile-header/profile-header.component';
import { ProfileGraphComponent } from './detail/profile-graph/profile-graph.component';
import { ProfileFavouriteComponent } from './detail/profile-favourite/profile-favourite.component';
import { ProfileTrendingComponent } from './detail/profile-trending/profile-trending.component';




@NgModule({
  declarations: [
    DetailComponent,
    ProfileHeaderComponent,
    ProfileGraphComponent,
    ProfileFavouriteComponent,
    ProfileTrendingComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    NgxChartsModule,
    ProfileRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule
  ]
})
export class ProfileModule { }
