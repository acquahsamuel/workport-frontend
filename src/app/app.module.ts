import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

/**
 * Refacotor for lazy loading
*/
import { AdminModule } from './modules/admin/admin.module';
import { UserAuthModule } from './modules/user-auth/user-auth.module';
import { HomepageModule } from './modules/homepage/homepage.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';

@NgModule({
  declarations: [AppComponent],

  imports: [
    AdminModule,
    UserAuthModule,
    HomepageModule,
    DashboardModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],

  providers: [
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
    // {provide : HTTP_INTERCEPTORS, useClass : HttpErrorInterceptor ,multi : true}
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
