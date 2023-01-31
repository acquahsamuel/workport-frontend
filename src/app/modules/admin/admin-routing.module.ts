import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "src/app/shared/services/auth-guard.service";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AdminComponent } from "./admin.component";
// import { AddCompanyComponent } from "./pages/add-company/add-company.component";
import { AddJobComponent } from "./pages/add-job/add-job.component";
import { AddUserComponent } from "./pages/add-user/add-user.component";
// import { AllStatisticsComponent } from "./pages/all-statistics/all-statistics.component";
import { AllUsersComponent } from "./pages/all-users/all-users.component";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "add-user", component: AddUserComponent },
      { path: "add-job", component: AddJobComponent },
      { path: "all-users", component: AllUsersComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
