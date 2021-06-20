import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/service/profile.service';

@Component({
  selector: 'app-profile-favourite',
  templateUrl: './profile-favourite.component.html',
  styleUrls: ['./profile-favourite.component.css']
})
export class ProfileFavouriteComponent implements OnInit {

  favouriteQuizzes!: any[];
  constructor(private profileService: ProfileService) {
    this.profileService.getFavouriteQuizzes().subscribe(data => {
      this.favouriteQuizzes = data;
    });
  }

  ngOnInit(): void {
  }

}
