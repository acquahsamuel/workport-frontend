import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode';


@Injectable()
export class AuthService {
  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
    private httpClient: HttpClient
  ) { }

  BASE_URL = 'http://localhost:5000/api/v1';
  NAME_KEY = 'name';
  TOKEN_KEY = 'token';

   getname() {
    return localStorage.getItem(this.NAME_KEY);
  }

  public isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }


  public tokenHeader() {
    let header = new Headers({ 'Authorization': 'Bearer' + localStorage.getItem(this.TOKEN_KEY) });
    // return new RequestOptions({ headers: header });
    return 'request options';
  }

  //pass in login payload (fields)
  public login(loginData) {
    this.httpClient.post(this.BASE_URL + '/login', loginData).subscribe(response => {
      this.authenticate(response);
    })
  }


  public logout() {
    localStorage.removeItem(this.NAME_KEY);
    localStorage.removeItem(this.TOKEN_KEY);
  }


  public authenticate(res) {
    var authResponse = res.json();

    if (!authResponse.token)
      return;

    localStorage.setItem(this.TOKEN_KEY, authResponse.token)
    localStorage.setItem(this.NAME_KEY, authResponse.firstName)
    this.router.navigate(['/']);
  }







}