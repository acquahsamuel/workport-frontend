import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/shared/services/notification.service";
import { ActivatedRoute, Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { JobService } from "src/app/shared/services/job.service";
import {
  CategoriesList,
  LocationsAllowed
} from "src/app/shared/constants/app.constants";

@Component({
  selector: "app-post-job",
  templateUrl: "./post-job.component.html",
  styleUrls: ["./post-job.component.scss"]
})
export class PostJobComponent implements OnInit {
  loading = false;
  submitted = false;
  locationList = LocationsAllowed;
  categoriesList = CategoriesList;
  categories = CategoriesList;
  // jobDescription : string = "";
  postJobForm: FormGroup;

  // Define static model
  // Refactor later
  position = "";
  title = "";
  locationAllowed = "";
  jobCategory = "";
  jobSearchTags = "";
  currency = "";
  jobDescription = "";
  // company : "623a4184d7cfbe66f0e18dff";
  companyName = "";
  applicationURL = "";
  jobType = "";

  constructor(
    private router: Router,
    private jobService: JobService,
    // public createJobListing : CreateJobListing,
    private fb: FormBuilder,
    private nofication: NotificationService
  ) {
    // this.createJobForm();
  }

  ngOnInit(): void {
    // this.description = this.postJobForm.get('description').value;
    // this.createJobForm();
    this.jobDescription = this.jobDescription || "";
  }

  // createJobForm(){
  //   this.postJobForm = this.fb.group({
  //     position : ['' , [Validators.required]],
  //     title : ['' , [Validators.required]],
  //     locationAllowed : ['' , [Validators.required]],
  //     jobCategory : ['' , [Validators.required]],
  //     jobSearchTags : ['' , [Validators.required]],
  //     currency : ['' , [Validators.required]],
  //     jobDescription : ['' , [Validators.required]],
  //     company : "623a4184d7cfbe66f0e18dff",
  //     companyName : ['' , [Validators.required]],
  //     applicationURL : ['' , [Validators.required]],
  //     jobType : ['' , [Validators.required]],
  //   })
  // }

  get getControls() {
    return this.postJobForm.controls;
  }

  loadAllCategories() {}

  submit() {
    // console.log(this.postJobForm.value);
    let payload = {
      position: this.position,
      title: this.title,
      locationAllowed: this.locationAllowed,
      jobCategory: this.jobCategory,
      jobSearchTags: this.jobSearchTags,
      currency: this.currency,
      jobDescription: this.jobDescription,
      company: "623a4184d7cfbe66f0e18dff",
      companyName: this.companyName,
      applicationURL: this.applicationURL,
      jobType: this.jobType
    };

    this.jobService.createJob(payload).subscribe(
      (res: any) => {
        console.log(res);

        if (res.status === "201") {
          this.nofication.notify("Job Created successfully", "success-toast");
          this.postJobForm.reset();
          this.router.navigateByUrl("/jobs");
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
