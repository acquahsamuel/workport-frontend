import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './pages/home/home.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { JobPostingComponent } from './pages/job-posting/job-posting.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { NavigationComponent } from 'src/app/shared/components/navigation/navigation.component';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { BrandFooterComponent } from 'src/app/shared/components/brand-footer/brand-footer.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { HeaderAdComponent } from './pages/home/header-ad/header-ad.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';

@NgModule({
    declarations: [
        HomeComponent,
        NavigationComponent,
        SidebarComponent,
        JobDetailsComponent,
        JobPostingComponent,
        SearchBarComponent,
        PagenotfoundComponent,
        HeaderComponent,
        HeaderAdComponent,
        BrandFooterComponent,
        SubscribeComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        HomepageRoutingModule
    ],
    providers: [

    ]

})
export class HomepageModule { }


