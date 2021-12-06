import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [
    AdminComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
