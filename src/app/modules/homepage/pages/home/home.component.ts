import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  jobDescription: string;
  jobListings: any;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    // this.isLoading = true;
    // this.loadAllJobs();
  }

  loadAllJobs() {
    this.jobService.allJobs().subscribe((jobs) => {
      this.jobListings = jobs;
      this.isLoading = false;
    });
  }
}
