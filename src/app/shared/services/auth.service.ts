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
           // https://workport.herokuapp.com/api/v1/auth/register

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {}

  public get userValue(): User {
    return this.userSubject.value;
  }

  // TODO : replace interface for user
  public register(user: any) {
    return this.http.post(`${this.BASE_URL}/auth/register`, user);
  }

  public login(user : any) {
    return this.http
      .post<User>(`${this.BASE_URL}/auth/login`, user)
      .pipe(
        map((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
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
