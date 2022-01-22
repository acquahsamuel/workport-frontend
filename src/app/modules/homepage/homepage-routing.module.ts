import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { JobPostingComponent } from './pages/job-posting/job-posting.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'subscribe', component: SubscribeComponent },
    { path: 'job-details', component: JobDetailsComponent },
    { path: 'job-details/:id', component: JobPostingComponent }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class HomepageRoutingModule { }

