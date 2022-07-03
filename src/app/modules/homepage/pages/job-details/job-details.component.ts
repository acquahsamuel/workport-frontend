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
  jobDetails : any;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id  = this.route.snapshot.params['id'];

    this.jobService.findJobById(id).subscribe((res : any) => {
      console.log(res);
       this.jobDetails = res?.data ;  
    }) ;
  }



  renderDescription(template : any) {
    template.innerHTML = this.jobDetails.jobDescription.toString();   
  }
}
