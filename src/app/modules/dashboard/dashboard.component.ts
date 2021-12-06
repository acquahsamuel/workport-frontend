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
  userProfile = './assets/images/user.jpg';


  links = [
    { path: '/home', icon: 'dashboard', title: 'Dashboard' },
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/home', icon: 'account_circle', title: 'Home' },
    { path: '/home', icon: 'settings', title: 'Home' },
    { path: '/home', icon: 'assignment', title: 'Home' },
    { path: '/home', icon: 'bookmark_border', title: 'Home' },
    { path: '/home', icon: 'delete', title: 'Home' },
    { path: '/home', icon: 'exit_to_app', title: 'Logout' },
    { path: '/home', icon: 'lock', title: 'Home' },
    { path: '/home', icon: 'redeem', title: 'Home' },
    { path: '/home', icon: 'forum', title: 'Home' },
    { path: '/home', icon: 'add', title: 'Add Account' },
  ]

  isLoading = true;

  user = {
    firstname : "Samuel",
    profile_pic : '../images'
  }


  authService  = '';


  logOut(){}

  enrollWithTrx(){}
  
}
