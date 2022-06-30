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
  description  : string = "";
  jobDescription : string = "";
  
 

  constructor(
    private router : Router,
    private jobService: JobService,
    private nofication : NotificationService,
    ) {}

  ngOnInit(): void {
    // this.description = this.postJobForm.get('description').value;
  }

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

  });

  get getControls(){
    return this.postJobForm.controls;
  }


  // const description = TINYMCE_SCRIPT_SRC.


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
      console.log(res.statusCode);

      if(res.status === 'success'){
        this.nofication.notify('Job Created successfully' , 'success-toast' ,) 
        this.postJobForm.reset();
        this.router.navigateByUrl('/jobs')
      }
    },(err : any) =>{
      console.log(err);
    })
  }

  // onreset() {
  //   this.submitted = false;
  //   this.postJobForm.reset();
  // }
}
