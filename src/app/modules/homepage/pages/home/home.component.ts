import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
 

  constructor(
    private jobService: JobService, 
    private  router : Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.loadAllJobs();

  }

  loadAllJobs() {
    this.jobService.allJobs().subscribe((jobs) => {
      this.jobListings = jobs;
      console.log(this.jobListings);
      this.isLoading = false;
    });
  }


  getJobDetails(id : any){
    this.router.navigate(['job-details', id]);
    console.log('Id from home ' + id);
  }

}
