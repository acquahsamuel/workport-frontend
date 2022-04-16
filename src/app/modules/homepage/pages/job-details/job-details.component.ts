import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { JobService } from 'src/app/shared/services/job.service';


export class IJob {
  id!: number;
  name!: string;
  occupation!: string;
  email!: string;
  bio!: string;
}

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss'],
})
export class JobDetailsComponent implements OnInit {
  jobDetails : any;
  id: number;
  xdata : any;

  constructor(
    private jobService: JobService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.jobService.findJob(this.id).subscribe((data) => {
      this.xdata = data;
      console.log(this.xdata);
    });
  }
}
