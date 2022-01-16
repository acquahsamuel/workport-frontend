import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  posts = [
    { title: 'ToGo Technology', jobTitle: 'Fullstack Javascript developer', hoursAgo: '5d' },
    { title: 'Google Inc', jobTitle: 'Data science', hoursAgo: '2 week ago' },
    { title: 'Surfline Internet', jobTitle: 'MVC4 C# fullstack Application developer', hoursAgo: '15d' },
    { title: 'AirtelTigo', jobTitle: 'Operation manager for Data center', hoursAgo: '2d' },
  ]

  constructor(
    private route: ActivatedRoute,
    private jobService: JobService,
    private companyService: CompanyService
  ) {
  }

  jobs: ICreateJob[] = [];
  companies: ICreateCompany[];
  // categories: ICategory[] = [];
  isLoading = true;


  ngOnInit(): void {
    this.loadAllJobs();
    this.loadAllCompanies();
    this.loadAllCategories();
  }

  loadAllJobs() {
    //implement an interface 
    this.jobService.getAllJobs().subscribe(x => {
      console.log(x);
    })
  }

  loadAllCompanies() {
    console.log('Companies Loaded')
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
