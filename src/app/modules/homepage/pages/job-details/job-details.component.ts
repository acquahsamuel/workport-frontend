import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  jobDetails = null;
  jobId;

  constructor(private jobService: JobService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.jobId = params.get('jobId');
    });
    this.loadJobs(this.jobId);
  }

  loadJobs(jobId) {
    this.jobService.findJob(jobId).subscribe((jobIx) => {
      this.jobId = jobIx;
    });
  }
}
