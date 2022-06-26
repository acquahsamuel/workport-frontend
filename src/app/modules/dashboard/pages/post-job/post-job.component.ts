import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobService } from 'src/app/shared/services/job.service';
import {
  CategoriesList,
  LocationsAllowed,
} from 'src/app/shared/constants/app.constants';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss'],
})
export class PostJobComponent implements OnInit {
  loading = false;
  submitted = false;
  locationAllowed = LocationsAllowed;
  categoriesList = CategoriesList;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {}

  postJobForm = new FormGroup({
    position: new FormControl('', [Validators.required]),
    locationsAllowed: new FormControl('', [Validators.required]),

    jobCategory: new FormControl('', [Validators.required]),
    jobTags: new FormControl('', [Validators.required]),

    jobDescription: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),

    companySize: new FormControl('', [Validators.required]),
    companyLogo: new FormControl('', [Validators.required]),

    companyTwitter: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
      ),
    ]),
    companyUrl: new FormControl('', [
      Validators.pattern(
        '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
      ),
    ]),
    companyLinkedin: new FormControl('', [
      Validators.required,
      Validators.pattern(
        '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
      ),
    ]),
    companyEmail: new FormControl('', [
      Validators.required,
      Validators.email,
     
    ]),
  });

  get getControls(){
    return this.postJobForm.controls;
  }


  createJob() {
    // this.submitted = true;
  
  //  console.log('Clicked');
  //   this.jobService.createJob(this.postJobForm.value).subscribe(
  //     (valx) => {
  //       console.log(valx);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }

  onreset() {
    this.submitted = false;
    this.postJobForm.reset();
  }
}
