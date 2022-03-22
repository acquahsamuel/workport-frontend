import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'src/app/shared/services/job.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
})
export class PostJobComponent implements OnInit {
  loading = false;
  submitted = false;
  jobModel: string;

  states: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas'];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {}

  postJobForm = new FormGroup({
    position: new FormControl('', [Validators.required]),
    locationAllowed: new FormControl('', [Validators.required]),

    jobCategory: new FormControl('', [Validators.required]),
    jobTags: new FormControl('', []),

    jobDescription: new FormControl('', []),

    companyName: new FormControl('', []),
    companyUrl: new FormControl('', [Validators.pattern('')]),
    companyDescription: new FormControl('', [Validators.required]),

    companySize: new FormControl('', [Validators.required]),
    companyLogo: new FormControl('', []),

    companyTwitter: new FormControl('', [
      Validators.required,
      Validators.pattern(''),
    ]),
    companyLinkedin: new FormControl('', [
      Validators.required,
      Validators.pattern(''),
    ]),
    companyEmail: new FormControl('', [
      Validators.required,
      Validators.pattern('/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/'),
    ]),
  });

  // get formField() {
  //   return this.postJobForm.controls;
  // }

  onSubmit() {
    // this.jobService.createJob(this.postJobForm.value).subscribe((valx) => {
    //   this.jobModel = valx;
    //   console.log(valx);
    // });
    console.log(this.postJobForm.value);
  }
}
