import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddCompanyComponent } from '../admin/pages/add-company/add-company.component';
import { AddJobComponent } from '../admin/pages/add-job/add-job.component';
import { AddUserComponent } from '../admin/pages/add-user/add-user.component';
import { AllStatisticsComponent } from '../admin/pages/all-statistics/all-statistics.component';
import { AllUsersComponent } from '../admin/pages/all-users/all-users.component';
import { ApproveJobPostingComponent } from '../admin/pages/approve-job-posting/approve-job-posting.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AddCompanyComponent,
    AddJobComponent,
    AddUserComponent,
    AllStatisticsComponent,
    AllUsersComponent,
    ApproveJobPostingComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    DashboardRoutingModule
  ]
})

export class DashboardModule { }
