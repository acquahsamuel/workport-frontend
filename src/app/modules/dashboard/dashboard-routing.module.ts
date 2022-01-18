import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from 'src/app/shared/constants/app.constants';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { LoginComponent } from '../user-auth/pages/login/login.component';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { YourPostsComponent } from './pages/your-posts/your-posts.component';

const routes: Routes = [
  {
    path: '',
    component: YourPostsComponent,
    children: [
      { path: "post-job", component: PostJobComponent },
      { path: "your-posts", component: YourPostsComponent },
      { path: "profile", component: ProfileComponent },
      { path: "post-job", component: LoginComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
