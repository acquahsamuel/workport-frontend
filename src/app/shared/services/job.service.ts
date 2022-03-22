import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const BASE_URL = `https://workport.herokuapp.com/api/v1/`;

@Injectable({
  providedIn: "root"
})
export class JobService {
  private model = "jobs";

  constructor(private httpClient: HttpClient) {}

  allJobs() {
    return this.httpClient.get(this.getUrl());
  }

  findJob(jobId) {
    return this.httpClient.get(this.getUrlById(jobId));
  }

  createJob(job) {
    return this.httpClient.post(this.getUrl(), job);
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
