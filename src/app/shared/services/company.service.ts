import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class CompanyService {
  BASE_URL = 'http://localhost:5000/api/v1';
  COMAPANIES_URL = 'http://localhost:5000/api/v1/companies';

  NAME_KEY = 'name';
  TOKEN_KEY = 'token';
  CURRENT_USER = 'currentUser';


  constructor(
    private httpClient: HttpClient
    ) { }



}
