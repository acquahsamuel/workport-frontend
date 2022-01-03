import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = `http://localhost:5000/api/v1`;

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {
  userToken: any;

  private companies = BASE_URL + '/companies';
  private jobs = BASE_URL + '/jobs';
  private auth = BASE_URL + '/auth';
  private users = BASE_URL + '/users';

  constructor(private httpClient: HttpClient) {}

  getJobUrl() {
    return this.httpClient.get(`${BASE_URL}/${this.jobs}`);
  }

  getCompaniesUrl() {
    return this.httpClient.get(`${BASE_URL}/${this.companies}`);
  }

  getAuthUrl() {
    return this.httpClient.get(`${BASE_URL}/${this.auth}`);
  }

  getUsersUrl() {
    return this.httpClient.get(`${BASE_URL}/${this.users}`);
  }

  getJobById(id : number){}

}

