import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = `http://localhost:3000/jobs`;

@Injectable({
  providedIn: 'root'
})

export class JobService {
  constructor(private httpClient: HttpClient) { }

  getAllJobs() {
    return this.httpClient.get(BASE_URL);
  }

  getJob(id: number) {
    return this.httpClient.get(BASE_URL);
    // return { ...this.p};
  }

  // Add IJob interface
  createJob() {
    // this.httpClient.post()
  }

}
