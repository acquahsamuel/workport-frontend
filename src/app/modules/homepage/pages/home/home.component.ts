import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  jobDescription: string;
  jobListings: any = [];
  jobIdx: any;

  constructor(
    private jobService: JobService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.loadAllJobs();
    this.checkAuth();
  }

  loadAllJobs() {
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobListings = jobs;
      this.isLoading = false;
    });
  }

  checkAuth() {
   this.authService.isAuthenticated();
  }

  getJobDetails(id: any) {
    this.router.navigate(['job-details', id]);
  }
}
