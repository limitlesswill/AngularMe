import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private isUserLoggedSubject: BehaviorSubject<boolean>;

  constructor() {
    this.isUserLoggedSubject = new BehaviorSubject<boolean>(this.UserState);
  }

  get UserState(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  login(email: string, password: string) {
    let userToken = '122333';
    localStorage.setItem('token', userToken);
    this.isUserLoggedSubject.next(true);
  }
  logout() {
    localStorage.removeItem('token');
    this.isUserLoggedSubject.next(false);
  }


}
