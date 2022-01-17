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

  title = '';
  username = 'Acquah Samuel';
  userProfile = './assets/images/placeholder.png';


  links = [
    // { path: 'dashboard', icon: 'dashboard', title: 'Dashboard' },
    { path: 'your-posts', icon: 'business', title: 'Your Posts' },
    { path: 'post-job', icon: 'work', title: 'Post Job' },
    { path: 'profile', icon: 'account_circle', title: 'Profile' },
    { path: 'logout', icon: 'exit_to_app', title: 'Logout' },
  ]

  isLoading = false;

  user = {
    firstname: "Samuel",
    profile_pic: '../images'
  }


  authService = '';

  logOut() { }

  enrollWithTrx() { }

  
}
