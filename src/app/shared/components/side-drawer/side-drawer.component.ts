import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-drawer',
  templateUrl: './side-drawer.component.html',
  styleUrls: ['./side-drawer.component.scss']
})
export class SideDrawerComponent implements OnInit {
   constructor() { }
   
   userProfile = 'assets/images/user.jpg';

  ngOnInit(): void {
  }
}


