import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifierModule } from 'angular-notifier';
import { EditorModule } from '@tinymce/tinymce-angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AdminModule } from './modules/admin/admin.module';
import { UserAuthModule } from './modules/user-auth/user-auth.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NotifierModule,
    NgxWebstorageModule.forRoot(),
    AdminModule,
    UserAuthModule,
    DashboardModule,
    HomepageModule,
    EditorModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],

  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
