import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// https://workport.herokuapp.com/api/v1/jobs

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private BASE_URL = `${environment.BASE_URL}/jobs`;

  constructor(private httpClient: HttpClient) {}

  allJobs() {
    return this.httpClient.get(this.getUrl());
  }

  findJob(jobId) {
    return this.httpClient.get(`${this.BASE_URL}/${jobId}`);
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
    return `${this.BASE_URL}`;
  }

  private getUrlById(jobId) {
    return `${this.getUrl}/${jobId}`;
  }
}
