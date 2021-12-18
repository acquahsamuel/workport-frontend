import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { FaqComponent } from './pages/faq/faq.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobPostingComponent } from './pages/job-posting/job-posting.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'faq', component: FaqComponent },
    { path: 'job-details', component: JobDetailsComponent },
    // { path: 'job-details/:job-id', component: JobDetailsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomepageRoutingModule { }

