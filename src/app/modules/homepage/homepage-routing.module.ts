import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'job-details/:jobId', component: JobDetailsComponent },
  //   { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
