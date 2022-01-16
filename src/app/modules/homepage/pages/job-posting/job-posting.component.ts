import { Component, Input, OnInit } from '@angular/core';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrls: ['./job-posting.component.scss']
})


export class JobPostingComponent implements OnInit {
  @Input() title: string;
  @Input() jobTitle: string;
  @Input() hours: string;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    this.loadAllJobs();
    this.loadAllCompanies();
  }


  loadAllJobs() {
    //implement an interface 
    this.jobService.getAllJobs().subscribe(x => {
      console.log(x);
    })
  }

  loadAllCompanies() {
    console.log('Companies Loaded')
  }



}