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
  userProfile = './assets/images/placeholder.png';

  links = [
    { path: 'dashboard', icon: 'dashboard', title: 'Dashboard' },
    { path: 'add-user', icon: 'account_circle', title: 'Add User' },
    { path: 'add-job', icon: 'forum', title: 'Add Job' },
    { path: 'add-company', icon: 'business', title: 'Add Company' },
    { path: 'all-users', icon: 'group_add', title: 'All Users' },
    { path: 'all-statictics', icon: 'apps', title: 'All Statistics' },
    { path: 'all-jobs', icon: 'account_circle', title: 'Job' },
    { path: 'explore', icon: 'redeem', title: 'Explore' },
    { path: 'logout', icon: 'exit_to_app', title: 'Logout' },
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
