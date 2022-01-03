import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = `http://localhost:5000/api/v1/jobs`;

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
  }

  // Add IJob interface
  createJob() {
    return 'Create job';
  }

}
