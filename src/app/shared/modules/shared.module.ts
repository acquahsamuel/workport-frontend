import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { StateStorageService } from '../services/state-storage.service';
import { LoaderComponent } from '../components/loader/loader.component';
import { CommonModule, } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [],
  exports: [LoaderComponent]
})


export class SharedModule { }

