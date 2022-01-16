import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ICreateUser } from '../interface/user.model';


@Injectable()
export class AuthService {
  constructor(
    public jwtHelper: JwtHelperService,
    private httpClient: HttpClient
  ) { }

  private BASE_URL = 'http://localhost:5000/api/v1';

  public isAuthenticated(): boolean {
    console.log('User authenticated');
    return true;

    

  }


 //ISignUp = create user interface
  signUp(user: ICreateUser) {
    // return this.httpClient.post(this.BASE_URL + '/auth/login', user);
    return 'User created'
  }

  /**
   * Removes a token from the LocalStorage
   */
  logout() {
    // localStorage.removeItem('currentUser');
    console.log('remove user id, token or user')
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