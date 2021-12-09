import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ICreateUser } from '../interface/user.model';
// import { ISignUp} form '../'


@Injectable()
export class AuthService {
  constructor(
    public jwtHelper: JwtHelperService,
    private httpClient: HttpClient
  ) { }


  private BASE_URL = 'http://localhost:5000/api/v1';

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false

    // return !this.jwtHelper.isTokenExpired(token);
    return false;
  }


  public login(email : string , password : string) {
    const hash = btoa(email + ':' + password );

    const httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        Authorization : 'Basic' + hash,
      })
    }
    return this.httpClient.post(`${this.BASE_URL}/auth/login`, httpOptions);
  }

 //ISignUp = create user interface
  signUp(user: ICreateUser) {
    return this.httpClient.post(this.BASE_URL + '/auth/login', user);
  }

  /**
   * Removes a token from the LocalStorage
   */
  logout() {
    localStorage.removeItem('currentUser');
  }

  /**
   * Saves a User token to the LocalStorage
   * @param token - the users token
   */
  saveUserToken(token: string) {
    // localStorage.setItem('currentUser', JSON.stringify(x.token));
    localStorage.setItem('currentUser', token);
  }




}