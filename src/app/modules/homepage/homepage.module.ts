import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './pages/faq/faq.component';
import { MaterialModule } from 'src/app/material.module';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { HomepageRoutingModule } from './homepage-routing.module';


@NgModule({
    declarations: [
        FaqComponent,
        AboutComponent,
        HomepageComponent,
    ],

    imports: [
        CommonModule,
        MaterialModule,
        SharedModule,
        HomepageRoutingModule
    ]
})
export class HomepageModule { }
