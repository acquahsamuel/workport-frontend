import { Component, OnInit } from '@angular/core';


 interface Food{
  value : string;
  viewValue : string;
}

interface Job{
  
}

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})


export class PostJobComponent implements OnInit {
foods: Food[] = [
    // {value: 'steak-0', viewValue: 'Web Development'},
    // {value: 'pizza-1', viewValue: 'Design'},
    // {value: 'tacos-2', viewValue: 'Product'},
    // {value: 'steak-0', viewValue: 'Customer Service'},
    // {value: 'pizza-1', viewValue: 'Data'},
    // {value: 'tacos-2', viewValue: 'Sales'},
    // {value: 'steak-0', viewValue: 'DevOps/SysAdmin'},
    // {value: 'pizza-1', viewValue: 'Business'},
    // {value: 'tacos-2', viewValue: 'Finance'},
    // {value: 'steak-0', viewValue: 'Legal'},
    // {value: 'pizza-1', viewValue: 'Human Resources'},
    // {value: 'tacos-2', viewValue: 'Medical'},
    // {value: 'steak-0', viewValue: 'Teaching'},
    // {value: 'pizza-1', viewValue: 'Everything Else'},    
  ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
