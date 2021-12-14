import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { YourPostsComponent } from './pages/your-posts/your-posts.component';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PostJobComponent,
    ProfileComponent,
    YourPostsComponent,
  ],

  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})

export class DashboardModule { }
