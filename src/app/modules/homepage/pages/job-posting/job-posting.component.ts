import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/shared/services/job.service';
import { ICreateJob } from 'src/app/shared/interface/job.model';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})


export class JobPostingComponent implements OnInit {
  constructor(
    private jobService: JobService) { }

  ngOnInit(): void {
    this.loadAllJobs();
  }

  jobs = [];

  loadAllJobs() {
    this.jobService.getAllJobs().subscribe((jobs: ICreateJob[]) => {
      this.jobs = jobs;
      // this.isLoading = false;
    })
  }
}
