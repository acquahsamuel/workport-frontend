import { Component, OnInit } from '@angular/core';
import { NotifierModule } from 'angular-notifier';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jobDetails = [
    {
      "name": "Backend Engineers",
      "position": "Senior Systems Engineer",
      "locationAllowed": "USA",
      "jobCategory": "Programming",
      "jobTags": [
        "Open team",
        "Computer Engineer",
        "DevOps",
        "Software Engineering"
      ],
      "minimumSalary": "2000",
      "maximumSalary": "8000",
      "currency": "USD",
      "salaryInterval": "yearly",
      "jobStatus": "full-time",
      "jobDescription": [
        "You have experience with technologies like Redis, RabbitMQ and the ELK stack",
        "You have experience with technologies like Redis, RabbitMQ and the ELK stack",
        "You have experience with technologies like Redis, RabbitMQ and the ELK stack",
        "You have experience with technologies like Redis, RabbitMQ and the ELK stack",
        "You have experience with technologies like Redis, RabbitMQ and the ELK stack",
        "You have experience with technologies like Redis, RabbitMQ and the ELK stack",
      ],
      "skills": [
        "Html",
        "CSS",
        "Node.js",
        "Amazon AWS Services",
        "Payment Integration",
        " React or Angular",
      ],
      "applicationURL": "https://mycompany.com/application",
      "applyToEmail": "companyemail09@gmail.com",
      "user": "6163439ef04c8f59b734a4e3",
      "company": "6166a9f1e420ee9791f6e640"
    }
  ]
}


