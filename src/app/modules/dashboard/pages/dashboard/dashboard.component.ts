import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private notification : NotificationService,

  ) { }

  ngOnInit(): void {
    this.currentUser();
  }


  currentUser(){
    this.authService.getCurrentUser().subscribe(user =>{
      console.log(user);
    })
  }

}

