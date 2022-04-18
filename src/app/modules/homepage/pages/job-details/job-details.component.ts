import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IJob } from 'src/app/shared/dto/create-job.dto';
import { JobService } from 'src/app/shared/services/job.service';



@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {  
  jobDetails : IJob = null;
  
  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id  = this.route.snapshot.params['id'];

    this.jobService.findJob(id).subscribe((res : any) => {
       this.jobDetails = res?.data ;  
       console.log(this.jobDetails);
    }) ;
  }

  update(jobDescription) {
    jobDescription.innerHTML = this.jobDetails.jobDescription;   
  }

}
