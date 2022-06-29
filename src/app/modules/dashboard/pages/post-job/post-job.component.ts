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

  toppingList = CategoriesList;

  constructor(private jobService: JobService) {}

  ngOnInit(): void {}

  postJobForm = new FormGroup({
    position: new FormControl('', [Validators.required]),
    title :  new FormControl('', [Validators.required]), 

    locationAllowed: new FormControl('', [Validators.required]),

    jobCategory: new FormControl('', [Validators.required]),
    jobSearchTags: new FormControl('', [Validators.required]),

    currency : new FormControl('', [Validators.required]),

    jobDescription: new FormControl('', [Validators.required]),
    companyName: new FormControl('', [Validators.required]),

    applicationURL : new FormControl('', [Validators.required]),


    jobType : new FormControl('', [Validators.required]),

    // companySize: new FormControl('', [Validators.required]),
    // companyLogo: new FormControl('', [Validators.required]),

    // companyTwitter: new FormControl('', [
    //   Validators.required,
    //   Validators.pattern(
    //     '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
    //   ),
    // ]),
    // companyUrl: new FormControl('', [
    //   Validators.pattern(
    //     '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
    //   ),
    // ]),
    // companyLinkedin: new FormControl('', [
    //   Validators.required,
    //   Validators.pattern(
    //     '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'
    //   ),
    // ]),
    // companyEmail: new FormControl('', [
    //   Validators.required,
    //   Validators.email,
     
    // ]),
  });

  get getControls(){
    return this.postJobForm.controls;
  }


  submit() {
    // console.log(this.postJobForm.value);
    let payload =  {
      position: this.postJobForm.get('position').value,
      title :  this.postJobForm.get('title').value,
      locationAllowed: this.postJobForm.get('locationAllowed').value,
      jobCategory: this.postJobForm.get('jobCategory').value,
      jobSearchTags: this.postJobForm.get('jobSearchTags').value,
      currency :  this.postJobForm.get('currency').value,
      company : "623a4184d7cfbe66f0e18dff",
      jobType :  this.postJobForm.get('jobType').value,
      jobDescription:  this.postJobForm.get('jobDescription').value,
      applicationURL:  this.postJobForm.get('applicationURL').value


     }
    this.jobService.createJob(payload).subscribe((res : any) =>{
      console.log(res);
    },(err : any) =>{
      console.log(err);
    })
  }

  onreset() {
    this.submitted = false;
    this.postJobForm.reset();
  }
}
