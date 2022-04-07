import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ISignUp, IUser, User } from '../dto/user.dto';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  BASE_URL = 'https://workport.herokuapp.com/api/v1';

  private userSubject: BehaviorSubject<User>;
  public user: Observable<User>;
  public signedin$ = new BehaviorSubject(false);

  constructor(private router: Router, private http: HttpClient) { }

  /**
   * 
   */
  public get userValue(): User {
    return this.userSubject.value;
  }

  /**
   * 
   * @param user 
   * @returns 
   *  * @description user register
   */
  public register(user: any) {
    return this.http.post(`${this.BASE_URL}/auth/register`, user).pipe
      (map((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        return user;
      })
      );
  }

  /**
   * 
   * @param user 
   * @returns 
   * @description user signup **
   */
  public signup(user: any) {
    return this.http.post(`${this.BASE_URL}/auth/register`, user).pipe(tap(() => {
      this.signedin$.next(true);
    }))
  }

  /**
   * 
   * @param user 
   * @returns 
   */
  public login(user: any) {
    return this.http.post<User>(`${this.BASE_URL}/auth/login`, user).pipe(
      map((user) => {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.userSubject.next(user);
        return user;
      })
    );
  }

  /**
   * 
   * @param email 
   * @returns 
   */
  public forgotPassword(email: string) {
    return this.http.post(`${this.BASE_URL}/auth/forgotpassword`, email);
  }

  /**
   * 
   * @param id 
   * @param data 
   * @returns 
   */
  public updateDetails(id: string, data: string) {
    return this.http.put(`${this.BASE_URL}/updatedetails/${id}`, data);
  }

  /**
   * Logout 
   */
  public logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }
}
