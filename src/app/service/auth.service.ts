import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient
  ) { }
  login(data: any): Observable<any> {
    return this.http.get('./assets/mock-data/login.json');
  }
  setLocalStorage(user: any): void {
    this.clearLocalStorage();
    localStorage.setItem("user", JSON.stringify(user));
  }
  clearLocalStorage(): void {
    localStorage.removeItem("user");
  }
  logout(): void  {
    this.clearLocalStorage();
  }
  resetPassWord(data: any): Observable<any> {
    return this.http.get('./assets/mock-data/reset-pwd.json');
  }
  public isLoggedIn(): boolean {
    return !localStorage.getItem('user') === null;
  }
}
