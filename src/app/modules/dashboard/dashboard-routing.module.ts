import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/app.constants';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { AddCompanyComponent } from '../admin/pages/add-company/add-company.component';
import { AddJobComponent } from '../admin/pages/add-job/add-job.component';
import { AddUserComponent } from '../admin/pages/add-user/add-user.component';
import { AllStatisticsComponent } from '../admin/pages/all-statistics/all-statistics.component';
import { AllUsersComponent } from '../admin/pages/all-users/all-users.component';
import { ApproveJobPostingComponent } from '../admin/pages/approve-job-posting/approve-job-posting.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      
      { path: '', component: DashboardComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
