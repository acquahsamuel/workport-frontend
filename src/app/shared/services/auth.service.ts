import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUp, IUser, User } from '../dto/user.dto';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL = 'https://workport.herokuapp.com/api/v1';

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {}

  public get userValue(): User {
    return this.userSubject.value;
  }

  public register(user: ISignUp) {
    return this.http.post(`${this.BASE_URL}/auth/register`, user);
  }

  public login(username, password) {
    return this.http
      .post<User>(`${this.BASE_URL}/auth/login`, { username, password })
      .pipe(
        map((user) => {
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  public forgotPassword(email: string) {
    return this.http.post(`${this.BASE_URL}/auth/forgotpassword`, email);
  }

  public updateDetails(id: string, data: string) {
    return this.http.put(`${this.BASE_URL}/updatedetails/${id}`, data);
  }

  public logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}
