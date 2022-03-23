import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { PostJobComponent } from './pages/post-job/post-job.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { YourPostsComponent } from './pages/your-posts/your-posts.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'post-job', component: PostJobComponent },
      { path: 'your-posts', component: YourPostsComponent },
      { path: 'profile', component: ProfileComponent },
      // {path : '' , component : }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
