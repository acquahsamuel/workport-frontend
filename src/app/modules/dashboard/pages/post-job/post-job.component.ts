import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/shared/services/job.service';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { NotificationService } from 'src/app/shared/services/notification.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.scss']
})


export class PostJobComponent implements OnInit {

  constructor(
    private notification: NotificationService
  ) { }

  ngOnInit(): void {
  }



}
