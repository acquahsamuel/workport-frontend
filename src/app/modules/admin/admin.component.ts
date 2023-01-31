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
  authService = '';
  userProfile = './assets/images/placeholder.png';
  isLoading = true;

  user = {
    firstname: "Samuel",
    profile_pic: '../images'
  }

 
  links = [
    { path: 'dashboard', icon: 'dashboard', title: 'Dashboard' },
    { path: 'add-user', icon: 'account_circle', title: 'Add User' },
    { path: 'add-job', icon: 'forum', title: 'Add Job' },
    { path: 'all-users', icon: 'group_add', title: 'All Users' },
    { path: 'all-jobs', icon: 'account_circle', title: 'Job' },
    { path: 'logout', icon: 'exit_to_app', title: 'Logout' },
  ]

 

  logOut() { }

  enrollWithTrx() { }



}
