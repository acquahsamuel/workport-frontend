import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://workport.herokuapp.com/api/v1/';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private model = 'companies';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get(this.getUrl());
  }

  find(jobId) {
    return this.httpClient.get(this.getUrlById(jobId));
  }

  create(job) {
    return this.httpClient.post(this.getUrl(), job);
  }

  update(job) {
    return this.httpClient.put(this.getUrlById(job.id), job);
  }

  delete(jobId) {
    return this.delete(this.getUrlById(jobId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl}/${id}`;
  }
}
