import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfileGraphData(): Observable<any> {
    return this.http.get('./assets/mock-data/profile-graph.json');
  }
  getTrendingQuizzes(): Observable<any> {
    return this.http.get('../assets/mock-data/trending-quizzes.json');
  }
  getFavouriteQuizzes(): Observable<any> {
    return this.http.get('../assets/mock-data/favourite-quizzes.json');
  }
}
