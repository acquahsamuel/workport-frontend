import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { LoaderComponent } from '../components/loader/loader.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [],
  exports: [LoaderComponent]
})

export class SharedModule { }

