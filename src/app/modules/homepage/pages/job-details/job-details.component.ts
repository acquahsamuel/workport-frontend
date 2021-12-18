import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.scss']
})
export class JobDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  jobs = [
    {
      jobTags: [
        "Open team",
        "Computer Engineer",
        "DevOps",
        "Lab",
      ],
      // _id: "61991cd8ab66bab71d68878b",
      position: "Senior Systems Engineer",
      locationAllowed: "Accra Ghana",
      jobCategory: "Dream Oval Ghana",
      minimumSalary: 2000,
      maximumSalary: 8000,
      currency: "USD",
      salaryInterval: "yearly",
      jobStatus: "full-time",
      // jobDescription: "We want to be the definitive food company - the app you go to any time you have a hunger pang. We are transforming the way people think about food. We are providing services",
      applicationURL: "https://mycompany.com/application/01",
      applyToEmail: "companyemailnew@gmail.com",
      user: "6163439ef04c8f59b734a4e3",
      company: "Google Inc",
      postingDate: "2021-11-20T16:05:44.715Z",
      slug: "senior-systems-engineer",
      id: "61991cd8ab66bab71d68878b",
      minimumQualification: [
        " JD or LL.B. degree.",
        "Qualified lawyer in Canada, with law firm or in-house experience.",
        "7 years of experience as a lawyer, including 3 years of experience working with federal, provincial, or municipal government procurement processes and contracting laws, regulations, and rules in Canada.  ",
        "Ability to speak and write English fluently."
      ],
      jobDescription: [
        "Architect Bandit backend systems using the best practice. ",
        "Implement and iterate features in a tactical manner and rapid pace.",
        "Work collaboratively and efficiently across functional teams in a fast paced early stage startup environment.",
        "Design, extend, and implement APIs.",
        "High standard of engineering quality through code reviews, unit tests, analytics.",
        "Create engineering efficiencies through automation and development of tools.",
        "Define engineering processes for product launch and releases.",
        "Help us grow the world class engineering team via by running technical interviews. ",
      ],
      aboutJob: [
        "As a Customer Engineer, you will help us grow our cybersecurity business by building and expanding relationships with customers. You will be a trusted advisor to customers and an advocate for our security solutions, providing support to C-Level, Security Leaders, Cloud Security Architects and Security Analysts. You'll accompany customers in discovering the technology/solution and consult around the best way to ensure compliance.Google Cloud provides organizations with leading infrastructure, platform capabilities and industry solutions. We deliver enterprise-grade cloud solutions that leverage Google’s cutting-edge technology to help companies operate more efficiently and adapt to changing needs, giving customers a foundation for the future. Customers in more than 150 countries turn to Google Cloud as their trusted partner to solve their most critical business problems."
      ]

    },

  ]

}
