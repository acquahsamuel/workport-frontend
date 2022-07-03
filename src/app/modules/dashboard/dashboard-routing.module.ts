import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "src/app/shared/services/auth-guard.service";
import { DashboardComponent } from "./dashboard.component";
import { PostJobComponent } from "./pages/post-job/post-job.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { YourPostsComponent } from "./pages/your-posts/your-posts.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "post-job",
        component: PostJobComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "your-posts",
        component: YourPostsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: "profile",
        component: ProfileComponent,
        canActivate: [AuthGuardService]
      }
      // {path : '' , component : }
    ]
  }
];

data: {
  expectedRole: ["ADMIN", "USER"];
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
