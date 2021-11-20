import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
// import { AuthService } from 'src/app/shared/services/auth.service';
// import { Dash }


@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class DashboardModule { }
