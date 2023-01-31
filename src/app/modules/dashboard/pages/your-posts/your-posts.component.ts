import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-posts',
  templateUrl: './your-posts.component.html',
  styleUrls: ['./your-posts.component.scss']
})
export class YourPostsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jobPosts = [
    {

    jobTitle : 'Demo',
    client : 'Company xyX',
    status : 'Active',
    actions : ['view', 'edit' , 'delete']
  },
  {

    jobTitle : 'Demo',
    client : 'Company xyX',
    status : 'Pending',
    actions : ['view', 'edit' , 'delete']
  },
  {

    jobTitle : 'Demo',
    client : 'Company xyX',
    status : 'Reject',
    actions : ['view', 'edit' , 'delete']
  },
  {

    jobTitle : 'Demo',
    client : 'Company xyX',
    status : 'Active',
    actions : ['view', 'edit' , 'delete']
  },   {

    jobTitle : 'Demo',
    client : 'Company xyX',
    status : 'Active',
    actions : ['view', 'edit' , 'delete']
  }

]

}
