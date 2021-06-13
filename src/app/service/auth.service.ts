import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInSubject = new Subject<boolean>();
  constructor(
    private http: HttpClient
  ) { }
  logInSubject(data: boolean) {
    this.loggedInSubject.next(data);
  }
  getIsLoggedIn(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
  }
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
  isLoggedIn(): boolean {
    return localStorage.getItem('user') !== null;
  }
}
