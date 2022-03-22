import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IUser } from '../dto/user.dto';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  allUsers() {
    const token = localStorage.getItem('currentUser');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };

    return this.http.get(`${environment.apiUrl}/users`, httpOptions);
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

    return this.http.post(`${environment.apiUrl}/users`, user, httpOptions);
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
    return this.http.put(
      `${environment.apiUrl}/users/${user.id}`,
      user,
      httpOptions
    );
  }

  getUserById(user: IUser) {
    const token = localStorage.getItem('currentUser');

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      }),
    };
    return this.http.get(`${environment.apiUrl}/users/${user.id}`, httpOptions);
  }

  deleteUser(user: IUser) {
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
    return this.http.put(
      `${environment.apiUrl}/users`,
      `${user.id}`,
      httpOptions
    );
  }
}
