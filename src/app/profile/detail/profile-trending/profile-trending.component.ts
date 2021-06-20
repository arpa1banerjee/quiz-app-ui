import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile-trending',
  templateUrl: './profile-trending.component.html',
  styleUrls: ['./profile-trending.component.css']
})
export class ProfileTrendingComponent implements OnInit {

  trendingItem!: any[];
  constructor(private profileService: ProfileService) {
    this.profileService.getTrendingQuizzes().subscribe(data => {
      this.trendingItem = data;
    })
  }

  ngOnInit(): void {
  }

}
