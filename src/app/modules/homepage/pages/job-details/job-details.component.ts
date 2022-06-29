import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { IJob } from 'src/app/shared/dto/create-job.dto';
import { JobService } from 'src/app/shared/services/job.service';
import { SafeHtmlPipe } from './formate';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {  
  @ViewChild('containerDiv') containerDiv: ElementRef;
  jobDetails : IJob = null;
  description = null;
  
  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id  = this.route.snapshot.params['id'];

    this.jobService.findJobById(id).subscribe((res : any) => {
       this.jobDetails = res?.data ;  
       console.log(this.jobDetails);
    }) ;
  }



  update(jobDescription) {
    console.log(jobDescription);
    jobDescription.innerHTML = this.jobDetails.jobDescription;   
    document.documentElement.innerHTML.replace(/</g,"&lt;") + "</pre>";
  }
  

}
