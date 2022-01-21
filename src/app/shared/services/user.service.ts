import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../dto/user.dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = 'http://localhost:5000/api/v1';
  USERS_URL = 'http://localhost:5000/api/v1/users';

  NAME_KEY = 'name';
  TOKEN_KEY = 'token';
  CURRENT_USER = 'currentUser';

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) { }


  allUsers() {
    const token = localStorage.getItem(this.CURRENT_USER);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.httpClient.get(this.USERS_URL, httpOptions);
  }


  getUserById(uid: string) {
    const token = localStorage.getItem(this.CURRENT_USER);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.httpClient.get(this.BASE_URL + '/users/' + `${uid}`, httpOptions);
  }



  //Add User
  addUser(user: IUser) {
    const token = localStorage.getItem('currentUser');
    /**
     * Creates an httpOptions and attaches a Bearer token
     */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.httpClient.post(this.USERS_URL, user, httpOptions);
  }


  //Delete user
  // Review the delete user 
  deleteUser(user: IUser) {
    // return this.httpClient.delete(`${this.USERS_URL}\\${user.user_id}`);
  }


  //Update User
  updateUser(user: IUser) {
    const token = localStorage.getItem('currentUser');
    /**
     * Creates an httpOptions and attaches a Bearer token
     */
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.httpClient.put(`${this.USERS_URL}`, user, httpOptions);
  }


   /**
   * Request a password reset with email
   * @param email
   */
    requestPasswordReset(email: string) {

      const payload = {
        email
      };
  
      return this.httpClient.post(`${this.USERS_URL}/begin_password_reset`, payload, );
    }

}
