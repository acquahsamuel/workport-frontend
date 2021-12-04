import { HttpClient } from '@angular/common/http';
import decode from 'jwt-decode';
import { Injectable } from '@angular/core';
import { MCreateUser } from '../models/user.model'
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(
    public jwtHelper: JwtHelperService,
    private httpClient: HttpClient
  ) { }

  // Refactor
  private userURL = `http://localhost:5000/api/v1/users`;

  public hasRole(expectedRole: string) {
    
    const token = localStorage.getItem('currentUser');
    // const tokenPayload: any = decode(token);
    // const roles = tokenPayload.roles.filter((role) => role.toLowerCase())
    
  }

  public signUp(user: MCreateUser) {
    return this.httpClient.post(this.userURL + '', user);
  }

  public logout() {
    localStorage.removeItem('currentUser');
  }

  public saveUserToken(token: string) {
    localStorage.setItem('currentUser', token);
  }

  public getCurrentUser() {
    const token = localStorage.getItem('currentUser');
    // const user = this.jwtHelper.decodeToken(token);
  }


  // public isAuthenticated() : boolean{
  //   const token = localStorage.getItem('currentUser');
  //   return !this.jwtHelper.isTokenExpired(token);
  // }

}


