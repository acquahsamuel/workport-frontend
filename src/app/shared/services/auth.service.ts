import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';

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


}