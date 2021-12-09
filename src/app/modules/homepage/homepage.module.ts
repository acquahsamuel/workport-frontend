import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FaqComponent } from './pages/faq/faq.component';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';
import { NavigationComponent } from 'src/app/shared/components/navigation/navigation.component';
import { SidebarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';


@NgModule({
    declarations: [
        FaqComponent,
        AboutComponent,
        HomepageComponent,
        NavigationComponent,
        HeaderComponent,
        SidebarComponent
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
