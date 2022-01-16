import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
    private route: ActivatedRoute) { }

  ngOnInit(): void { }


  onClick() {

  }

}
