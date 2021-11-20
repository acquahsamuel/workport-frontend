import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Dashboard';

  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/home', icon: 'home', title: 'Home' }
  ]

}
