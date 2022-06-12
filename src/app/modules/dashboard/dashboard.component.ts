import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  signedin = false;
  constructor(
    private router: Router, 
    private authService: AuthService
    ) {}

  ngOnInit(): void {
   this.authService.getCurrentUser().subscribe(x =>{
    console.log(x);
   })
  }

  isLoading = false;
  title = '';
  username = 'Samuel';
  userProfile = './assets/images/placeholder.png';
  links = [
    { path: 'your-posts', icon: 'business', title: 'Your Posts' },
    { path: 'post-job', icon: 'work', title: 'Post Job' },
    { path: 'profile', icon: 'account_circle', title: 'Profile' },
  ];

  user = {
    firstname: 'Samuel',
    profile_pic: '../images',
  };

  logout() {
    this.router.navigateByUrl('/login');
    // this.authService.logout();
    // console.log('clicked');
  }
}
