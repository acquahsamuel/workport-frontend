import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { NavigationComponent } from 'src/app/shared/components/navigation/navigation.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { JobPostingComponent } from './pages/job-posting/job-posting.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { MainContentComponent } from './components/main-content/main-content.component';


@NgModule({
    declarations: [
        HomeComponent,
        FaqComponent,
        AboutComponent,
        NavigationComponent,
        SidebarComponent,
        JobDetailsComponent,
        JobPostingComponent,
        MainContentComponent,
        PagenotfoundComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        HomepageRoutingModule
    ],
    providers: []

})
export class HomepageModule { }
