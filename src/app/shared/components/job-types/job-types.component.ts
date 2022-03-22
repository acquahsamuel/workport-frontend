import { Component, OnInit } from '@angular/core';
import { JobTypes } from '../../constants/app.constants';

@Component({
  selector: 'app-job-types',
  templateUrl: './job-types.component.html',
  styleUrls: ['./job-types.component.scss'],
})
export class JobTypesComponent implements OnInit {
  jobTypes = JobTypes;
  value = '';

  constructor() {}

  ngOnInit(): void {
    const jobType = document.querySelector('jobType');
  }

  onChecked(value: string) {
    console.log(value);
  }
}
