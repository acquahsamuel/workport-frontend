import { HttpClient, HttpHeaders } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../dto/user.dto";
import decode from "jwt-decode";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private BASE_URL = environment.BASE_URL;
  public signedin$ = new BehaviorSubject(false);

  constructor(
    private router: Router,
    private jwtHelper: JwtHelperService,
    private httpClient: HttpClient
  ) {}

  /**
   *
   * @param user
   * @returns
   * @description user signup **
   */
  signUp(user: any) {
    return this.httpClient.post(`${this.BASE_URL}/auth/register`, user);
  }

  /**
   *
   * @param user
   * @returns
   */
  logIn(email: string, password: string) {
    // const info = 
    const body =  JSON.stringify({ email, password });

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
        // Authorization: 'Basic ' + hash,
      })
    };
    return this.httpClient.post(`${this.BASE_URL}/auth/login`, body, {
      ...httpOptions
    });
  }
  /**
   *
   * @returns
   * Get authenticated state
   */
  public isAuthenticated() {
    return localStorage.getItem("userId") ? true : false;
  }

  /**
   * Saves a User token to the LocalStorage
   * @param token - the users token
   */
  saveUserToken(token: string) {
    // localStorage.setItem('currentUser', JSON.stringify(x.token));
    localStorage.setItem("userId", token);
  }

  removeUserToken() {
    localStorage.removeItem("userId");
  }

  /**
   * @description get current user
   * @param
   * @returns
   */
  getCurrentUser() {
    const token = localStorage.getItem("currentUser");
    const user = this.jwtHelper.decodeToken(token as string);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer" + token
      })
    };

    return this.httpClient.get(`${this.BASE_URL}/auth/me`, httpOptions);
  }

  /**
   *
   * @param email
   * @returns
   */
  forgotPassword(email: string) {
    return this.httpClient.post(`${this.BASE_URL}/auth/forgotpassword`, email);
  }

  /**
   *
   * @param id
   * @param data
   * @returns
   */
  updateUserDetails(id: string, data: string) {
    const token = localStorage.getItem("currentUser");
    const user = this.jwtHelper.decodeToken(token as string);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer" + token
      })
    };

    return this.httpClient.put(
      `${this.BASE_URL}/updatedetails/${id}`,
      httpOptions
    );
  }

  /**
   * Returns the User Id Stored in the Token
   * @returns the user_id as a string
   */
  getUserId(): string {
    const token = localStorage.getItem("currentUser");
    const tokenPayload: any = decode(token as string);
    return tokenPayload.sub;
  }

  /**
   * Logout
   */
  logout() {
    return this.httpClient.get(this.BASE_URL + "/logout", {
      withCredentials: true
    });
  }
}
