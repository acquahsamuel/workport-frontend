import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { JobService } from 'src/app/shared/services/job.service';
import { CompanyService } from 'src/app/shared/services/company.service';
import { ICreateJob } from 'src/app/shared/interface/job.model';
import { ICategory, IUpdateCategory } from 'src/app/shared/interface/category.interface';
import { ICreateCompany } from 'src/app/shared/interface/company.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  pageTitle = "Home";
  pageBrand = "Workport"

  categories = [
    { title: 'Sales & Marketing' },
    { title: 'Design & User Experience' },
    { title: 'Product Management' },
    { title: 'Customer & Community' },
    { title: 'Software Development' },
    { title: 'Operation & Finance' },
    { title: 'Quality Assurance' },
    { title: 'HR & Recruiting' },
    { title: 'Content & Copyrighting' },
    { title: 'Other' }
  ]

  jobTypes = [
    { title: 'Full Time' },
    { title: 'Part-Time' },
    { title: 'Contract' },
    { title: 'Other' },
  ]

  jobListings = [

    {
      "name": "Backend Engineers",
      "position": "Senior Systems Engineer",
      "locationAllowed": "USA",
      "salaryInterval": "yearly",
      "jobStatus": "full-time",
      "user": "6163439ef04c8f59b734a4e3",
      "company": "6166a9f1e420ee9791f6e640"
    },
    {
      "name": "Stanbic Bank Ghana",
      "position": "Full stack integrations engineer",
      "salaryInterval": "yearly",
      "jobStatus": "Part-time",
      "user": "6163439ef04c8f59b734a4e3",
      "company": "6166a9f1e420ee9791f6e640"
    },
    {
      "name": "Stanbic Bank Ghana",
      "position": "Full stack integrations engineer",
      "salaryInterval": "yearly",
      "jobStatus": "Part-time",
      "user": "6163439ef04c8f59b734a4e3",
      "company": "6166a9f1e420ee9791f6e640"
    }
  ]

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private companyService: CompanyService,
  ) {
  }

  jobs: ICreateJob[] = [];
  companies: ICreateCompany[];
  // categories: ICategory[] = [];
  isLoading = true;


  ngOnInit(): void {
    this.loadAllJobs();
    this.loadAllCategories();
  }

  loadAllJobs() {
    //implement an interface 
    this.jobService.getAllJobs().subscribe(x => {
      console.log(x);
    })
  }

  loadAllCategories() {
    console.log('Categories');
  }

  //implement categories interface
  compare(a: any, b: any) {
    return b - a;
  }

  slicedJobListings() {
    let sliced = [];
  }

}
