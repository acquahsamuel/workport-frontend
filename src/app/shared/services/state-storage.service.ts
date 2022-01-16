import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateStorageService {

  constructor() { }

  saveUserInfo(token: string, info: string) {
    localStorage.setItem(token, info);
  }

  getUserInfo(token: string, info: string) {
    localStorage.getItem(token);
  }

  clearUserInfo(token: string) {
    localStorage.removeItem(token);
  }

  loggedInUser() {
    return localStorage.getUserInfo('token');
  }
}
