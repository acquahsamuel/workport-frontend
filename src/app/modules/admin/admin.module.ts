import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { AdminRoutingModule } from './admin-routing.module';
// import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AdminComponent } from './admin.component';
import {  MatTableModule } from '@angular/material/table';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent
  ],

  imports: [
    CommonModule,
    MatTableModule,
    // SharedModule,
    MaterialModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
