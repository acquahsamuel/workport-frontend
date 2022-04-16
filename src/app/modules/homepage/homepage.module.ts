import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { HomeComponent } from './pages/home/home.component';
import { HomepageRoutingModule } from './homepage-routing.module';
import { AuthGuardService } from 'src/app/shared/services/auth-guard.service';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/shared/services/auth.service';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { SearchBarComponent } from 'src/app/shared/components/search-bar/search-bar.component';
import { BrandFooterComponent } from 'src/app/shared/components/brand-footer/brand-footer.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { HeaderAdComponent } from './pages/home/header-ad/header-ad.component';
import { JobTypesComponent } from 'src/app/shared/components/job-types/job-types.component';
import { SubscribeComponent } from './pages/subscribe/subscribe.component';
import { SubscriberFooterComponent } from 'src/app/shared/components/subscriber-footer/subscriber-footer.component';

@NgModule({
    declarations: [
        HomeComponent,   
        SidebarComponent,
        JobDetailsComponent,
        SearchBarComponent,
        PagenotfoundComponent,
        HeaderComponent,
        HeaderAdComponent,
        JobTypesComponent,
        BrandFooterComponent,
        SubscriberFooterComponent,
        SubscribeComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        HomepageRoutingModule
    ],
    providers: [
        AuthService, JwtHelperService, AuthGuardService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    ]
})
export class HomepageModule { }


