import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],

  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }


