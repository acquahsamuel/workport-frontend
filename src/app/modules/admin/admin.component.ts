import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  title = '';
  username = 'Acquah Samuel';
  userProfile = './assets/images/user.jpg';


  links = [
    { path: '/home', icon: 'dashboard', title: 'Dashboard' },
    { path: '/home', icon: 'home', title: 'Home' },
    // { path: '/home', icon: 'account_circle', title: 'Home' },
    // { path: '/home', icon: 'settings', title: 'Home' },
    // { path: '/home', icon: 'assignment', title: 'Home' },
    // { path: '/home', icon: 'bookmark_border', title: 'Home' },
    // { path: '/home', icon: 'delete', title: 'Home' },
    // { path: '/home', icon: 'exit_to_app', title: 'Logout' },
    // { path: '/home', icon: 'lock', title: 'All Statistics' },
    { path: '/home', icon: 'redeem', title: 'Add User' },
    { path: '/home', icon: 'forum', title: 'Add Job' },
    { path: '/home', icon: 'add', title: 'Add Company' },
    { path: '/home', icon: 'add', title: 'All Users' },
    { path: '/home', icon: 'add', title: 'All Users' },
  ]

  isLoading = true;

  user = {
    firstname: "Samuel",
    profile_pic: '../images'
  }

  authService = '';

  logOut() { }

  enrollWithTrx() { }



}
