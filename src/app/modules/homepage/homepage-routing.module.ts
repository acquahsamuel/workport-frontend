import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'subscribe', component: SubscribeComponent },
    { path: 'job-details', component: JobDetailsComponent },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepageRoutingModule { }

