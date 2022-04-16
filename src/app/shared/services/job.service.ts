import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = `https://workport.herokuapp.com/api/v1/`;
const BASE_URRL = `https://workport.herokuapp.com/api/v1/jobs`;

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private model = 'jobs';

  constructor(private httpClient: HttpClient) {}

  allJobs() {
    return this.httpClient.get(this.getUrl());
  }

  findJob(jobId) {
    return this.httpClient.get(`${BASE_URRL}/${jobId}`);
  }

  createJob(job: any) {
    return this.httpClient.post(this.getUrl(), JSON.stringify(job));
  }

  updateJob(job) {
    return this.httpClient.put(this.getUrlById(job.id), job);
  }

  deleteJob(jobId) {
    return this.httpClient.delete(this.getUrlById(jobId));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(jobId) {
    return `${this.getUrl}/${jobId}`;
  }
}
