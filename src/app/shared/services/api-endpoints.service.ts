import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {
  userToken: any;

  private BASE_URL = `http://localhost:5000/api/v1`;
 

  private companies = this.BASE_URL + '/companies';
  private jobs = this.BASE_URL + '/jobs';
  private auth = this.BASE_URL + '/auth';
  private users = this.BASE_URL + '/users';

  constructor() { }
}

