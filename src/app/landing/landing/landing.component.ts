import { Component, OnInit } from '@angular/core';

export interface Category {
  name: string;
  image: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  auto = 'auto';
  interval = 5000;
  proportion = 50;
  categories: Category[] = [
    {
      name: 'Sports',
      image: 'assets/img/sports.png'
    },
    {
      name: 'Movies',
      image: 'assets/img/movies.jpeg'
    },
    {
      name: 'Geography',
      image: 'assets/img/geography.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
